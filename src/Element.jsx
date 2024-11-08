import { useParams, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export default function Element({link, navField, ...rest}) {

	const params = useParams();

	return (
	  <div>
		Element {link} {navField} {params.id}

	  </div>
	);
  }
  