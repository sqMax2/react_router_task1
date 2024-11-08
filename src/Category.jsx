import { useMemo, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useDataFetching from "./useDataFetching";
import { useEffect } from "react";

export default function Category({ link, displayField, navField, ...rest }) {
  const [data, setData] = useState([]);
  const dataFetched = useDataFetching(link);
  

  useEffect(() => {
    setData(dataFetched);
	  console.log(dataFetched);
  }, [dataFetched]);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <>
      {memoizedData ? (
        <ul className="category-list">
          {memoizedData.map((item) => (
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
