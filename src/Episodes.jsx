import Category from "./Category";

export default function Episodes() {
  

  return (
    <div>
      <h1>Episodes</h1>
      <Category link="https://rickandmortyapi.com/api/episode" displayField="name" navField="id" />
    </div>
  );
}
