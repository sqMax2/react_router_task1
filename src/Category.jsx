import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useDataFetching from "./useDataFetching";
import Sorting from "./Sorting";


export default function Category({ link, displayField, navField, ...rest }) {
  const [data, setData] = useState([]);
  const dataFetched = useDataFetching(link);
  const [asc, setAsc] = useState(true);
  
  function compare(a, b) {
    if (Date.parse(a['created']) < Date.parse(b['created'])) {
      return -1;
    }
    if (Date.parse(a['created']) > Date.parse(b['created'])) {
      return 1;
    }
    return 0;
  }

  const toggleSort = () => {
    setData((prevData) => prevData.reverse());
    setAsc((prevOrder) => !prevOrder);
  };

  useEffect(() => {
    // setData(dataFetched.sort(compare));
    
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
