import { useParams, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useMemo, useState } from "react";
import useDataFetching from "./useDataFetching";

export default function Element({link, navField, ...rest}) {
	const [data, setData] = useState([]);
	const dataFetched = useDataFetching(link);
	const params = useParams();
	
	useEffect(() => {
		setData(dataFetched?dataFetched.find((element) => element.id == params.id):null);
	  }, [dataFetched]);
	
	  const memoizedData = useMemo(() => data, [data]);
	
	return (
		<>
			{memoizedData ? 
				Object.entries(memoizedData).map(([key, value]) => (
					<p>
						{key == "image"?<img src={value} alt="" />: key == 'id'?'':`${key}: ${value?value:'none'}`}
					</p>
					))
			 : (
				<div className="alert-text">Loading...</div>
			)}
		</>
	);
  }
  