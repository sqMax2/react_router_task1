import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import useDataFetching from "./useDataFetching";
import FieldFilter from "./component/FieldFilter";

export default function Element({link, navField, ...rest}) {
	const [data, setData] = useState([]);
	const params = useParams();
	const {dataFetched, error, loading, hasMore} = useDataFetching(link + '/' + params.id);
	const location = useLocation();
	const navigate = useNavigate();
	
	useEffect(() => {

		const tempData = dataFetched[0];
		if (error) navigate('/404', {replace: true, state: {from: location.pathname}});
		setData(tempData);
	  }, [dataFetched, location, error]);
		
	return (
		<>
			{data ? 
				Object.entries(data).map(([key, value]) => (
					FieldFilter({key, value})
					))
			 : (
				<div className="alert-text">Loading...</div>
			)}
		</>
	);
  }
  