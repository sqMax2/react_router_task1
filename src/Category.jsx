export default function Category({link, displayField, navField, ...rest}) {
	
	fetch(link)
  
	  .then((response) => response.json())
	  .then((obj) => console.log(obj));
  
	return (
	  <ul>

	  </ul>
	);
  }
  