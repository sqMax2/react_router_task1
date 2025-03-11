import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import useDataFetching from "./useDataFetching";

export default function Element({link, navField, ...rest}) {
	const [data, setData] = useState([]);
	const dataFetched = useDataFetching(link);
	const params = useParams();
	
	useEffect(() => {
		setData(dataFetched?dataFetched.find((element) => element.id == params.id):null);
	  }, [dataFetched]);
	
	
	return (
		<>
			{data ? 
				Object.entries(data).map(([key, value]) => (
					<p key={key}>
						{key === "image"?<img src={value} alt="" />: key === 'id'?'':`${key}: ${value?value:'none'}`}
					</p>
					))
			 : (
				<div className="alert-text">Loading...</div>
			)}
		</>
	);
  }
  