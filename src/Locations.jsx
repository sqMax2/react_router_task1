import Category from "./Category";

export default function Locations() {
  

  return (
    <div>
      <h1>Characters</h1>
      <Category link="/location.json" displayField="name" navField="id" />
    </div>
  );
}
