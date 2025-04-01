import Category from "./Category";

export default function Locations() {
  

  return (
    <div>
      <h1>Locations</h1>
      <Category link="https://rickandmortyapi.com/api/location" displayField="name" navField="id" />
    </div>
  );
}
