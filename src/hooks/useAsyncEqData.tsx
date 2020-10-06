import { useState, useCallback, useEffect } from 'react';
import { getNextdayWithDash, normalize } from '../utils';
import { EqObject } from '../types';

const QUELY_LIMIT = 100;

const useAsyncEqData = (selectedDate: string) => {
  const [eqs, setEqArray] = useState<EqObject[][]>([]);

  const requestEqs = useCallback(async () => {
    try {
      const query = `format=geojson&orderby=magnitude&starttime=${selectedDate}&endtime=${getNextdayWithDash(
        selectedDate
      )}&limit=${QUELY_LIMIT}`;
      const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?${query}`;
      const { features } = await (await fetch(url)).json();
      const normalized = features.length > 0 ? normalize(features) : [];

      if (normalized) setEqArray(normalized);
    } catch (error) {
      console.log(error);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (selectedDate) requestEqs();
  }, [selectedDate, requestEqs]);

  return [eqs];
};

export default useAsyncEqData;
