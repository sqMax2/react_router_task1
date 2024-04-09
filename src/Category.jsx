import { useState } from "react";
import useDataFetching from "./useDataFetching";
import { useEffect } from "react";

export default function Category({ link, displayField, navField, ...rest }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(useDataFetching(link));
  }, []);

  return (
    <>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item[navField]}>
              <img src={item["image"]} alt="" />
              {item[displayField]}
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert-text">Loading...</div>
      )}
      ;
    </>
  );
}
