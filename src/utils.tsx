import { ResponseItem, EqObject } from './types';

export const normalize = (response: ResponseItem[]) => {
  const resLength = response.length;
  const array = [];

  // response is less than 20 items
  if (resLength <= 20) {
    const initialAcc: EqObject[] = [];
    const subArray = response.reduce((acc, feature) => {
      acc.push(formatData(feature));
      return acc;
    }, initialAcc);
    array.push(subArray);

    return array;
  }

  // response is more than 20 items
  for (let i = 0; i < response.length; i += 20) {
    const subArray = [];

    for (let j = i; j < i + 20; j++) {
      if (!response[j]) break;

      const newObj = formatData(response[j]);
      subArray.push(newObj);
    }
    array.push(subArray);
  }

  return array;
};

const formatData = (data: ResponseItem): EqObject => {
  const {
    id,
    properties: { mag, place, time },
    geometry: { coordinates },
  } = data;

  return {
    id,
    mag,
    place,
    time: new Date(time).toUTCString().slice(0, -3),
    lng: coordinates[0],
    lat: coordinates[1],
    depth: coordinates[2],
  };
};

// convert Date object to "XXXX-XX-XX" string format
export const formatDateToDash = (dateObject: Date) =>
  dateObject.toISOString().substr(0, 10);

export const getNextdayWithDash = (dateStr: string): string => {
  const date = new Date(dateStr);
  date.setDate(date.getDate() + 1);
  return formatDateToDash(date);
};
