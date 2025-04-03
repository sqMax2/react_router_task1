import { useState, useEffect } from 'react';

export default function useDataFetching(url, page=0){
  const [dataFetched, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(url + ((page>1)?`?page=${page}`:''), {
      method: 'GET', 
    })
    .then(response => response.json())
    .then(result => {
      if (result?.error) throw new Error(result.error);
      setData(prevState => {
        if (result.results) return [...prevState, ...result.results];
        return [result];
    }); 
      setLoading(false);
      setHasMore(result?.info?.next);
    })
    .catch(e => {
      setError(true);
    });
  }, [url, page]);
  return {
    dataFetched,
    error,
    loading,
    hasMore
  };
}
