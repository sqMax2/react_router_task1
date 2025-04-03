import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useDataFetching from "./useDataFetching";
import Sorting from "./Sorting";

export default function Category({ link, displayField, navField, ...rest }) {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const {dataFetched, error, loading, hasMore} = useDataFetching(link, pageNumber);
  const [asc, setAsc] = useState(true);
  const observer = useRef();

  const lastNodeRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }      
    });
    if (node) {
      observer.current.observe(node);
    }
  }, [loading, hasMore]);
  
  const toggleSort = () => {
    setData((prevData) => prevData.reverse());
    setAsc((prevOrder) => !prevOrder);
  };

  useEffect(() => {
    const tempData = dataFetched;
    if (Array.isArray(tempData)) {
      tempData.sort();
    }
    setData(tempData);
    setAsc(true);
  }, [dataFetched]);

  return (
    <>
      <Sorting sortFn={toggleSort} sortDirection={asc} />
      {data ? (
        <ul className="category-list">
          {Array.isArray(data)?data.map((item, index) => {
            if (data.length -3 === index + 1) {
              return (
                <li ref={lastNodeRef} key={item[navField]}>
                  <Link to={`${item[navField]}`}>
                    {item["image"]?<img src={item["image"]} alt="" />:""}
                    <div>{item[displayField]}</div>
                  </Link>
                </li>
              )
            } else {
              return (
                <li key={item[navField]}>
                  <Link to={`${item[navField]}`}>
                    {item["image"]?<img src={item["image"]} alt="" />:""}
                    <div>{item[displayField]}</div>
                  </Link>
                </li>
              )
            }
          }):""}
        </ul>
      ) : (
        <div className="alert-text">Loading...</div>
      )}
      { loading && <div className='alert-text'>Loading...</div>}
      { error && <div className='alert-text'>Loading error</div>}
    </>
  );
}
