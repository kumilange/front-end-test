import { useState, useCallback, useEffect } from 'react';
import { getNextdayWithDash, normalize } from '../utils';
import { EqObject } from '../types';

const QUELY_LIMIT = 100;

const useAsyncEqData = (selectedDate: string) => {
  const [eqs, setEqArray] = useState<EqObject[][]>([]);

  const requestEqs = useCallback(async () => {
    const query = `format=geojson&orderby=magnitude&starttime=${selectedDate}&endtime=${getNextdayWithDash(
      selectedDate
    )}&limit=${QUELY_LIMIT}`;
    const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?${query}`;
    const res = await fetch(url);
    if (res.status === 200) {
      const { features } = await res.json();
      const normalized = features.length > 0 ? normalize(features) : [];
      setEqArray(normalized);
    } else {
      throw new Error(`Error occurred! ${res.status}`);
    }
  }, [selectedDate]);

  useEffect(() => {
    try {
      if (selectedDate) requestEqs();
    } catch (error) {
      console.error(error);
    }
  }, [selectedDate, requestEqs]);

  return [eqs];
};

export default useAsyncEqData;
