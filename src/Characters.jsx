import Category from "./Category";

export default function Characters() {
  

  return (
    <div>
      <h1>Characters</h1>
      <Category link="../public/characters.json" displayField="name" navField="id" />
    </div>
  );
}
