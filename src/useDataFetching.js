import { useState, useEffect, useMemo } from 'react';

export default function useDataFetching(url){
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [url]);

  const memoizedData = useMemo(() => data, [data, url]);

  return memoizedData;
}