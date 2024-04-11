import { useState, useEffect } from 'react';

export default function useDataFetching(url){
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(result => setData(result))
  }, [url]);

  return data;
}