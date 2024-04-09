import Category from "./Category";

export default function Episodes() {
  

  return (
    <div>
      <h1>Characters</h1>
      <Category link="/episode.json" displayField="name" navField="id" />
    </div>
  );
}
