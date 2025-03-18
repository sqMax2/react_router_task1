import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import useDataFetching from "./useDataFetching";

export default function Element({link, navField, ...rest}) {
	const [data, setData] = useState([]);
	const dataFetched = useDataFetching(link);
	const params = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	
	useEffect(() => {
		const tempData = Array.isArray(dataFetched)?dataFetched.find((element) => Number(element.id) === Number(params.id)):null;
		if (typeof(tempData) === "undefined") navigate('/404', {replace: true, state: {from: location.pathname}});
		setData(tempData);
	  }, [dataFetched, location]);
		
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
  