export default function Element({link, navField}) {
	fetch("../public/characters.json")
  
	  .then((response) => response.json())
	  .then((obj) => console.log(obj));
  
	return (
	  <div>

	  </div>
	);
  }
  