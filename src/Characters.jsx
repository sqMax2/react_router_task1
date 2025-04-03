import Category from "./Category";

export default function Characters() {
  

  return (
    <div>
      <h1>Characters</h1>
      <Category link="https://rickandmortyapi.com/api/character" displayField="name" navField="id" />
    </div>
  );
}
