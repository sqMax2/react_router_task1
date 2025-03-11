import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useDataFetching from "./useDataFetching";
import Sorting from "./Sorting";


export default function Category({ link, displayField, navField, ...rest }) {
  const [data, setData] = useState([]);
  const dataFetched = useDataFetching(link);
  const [asc, setAsc] = useState(true);
  
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
          {data.map((item) => (
            <li key={item[navField]}>
              <Link to={`${item[navField]}`}>
                {item["image"]?<img src={item["image"]} alt="" />:""}
                <div>{item[displayField]}</div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert-text">Loading...</div>
      )}
      
    </>
  );
}
