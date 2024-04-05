export default function Characters() {
  fetch("../public/characters.json")

    .then((response) => response.json())
    .then((obj) => console.log(obj));

  return (
    <div>
      <h1>Characters</h1>
    </div>
  );
}
