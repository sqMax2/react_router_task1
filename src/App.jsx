import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./NotFound";
import Home from "./Home";
import Characters from "./Characters";
import Character from "./Character";
import Episode from "./Episode";
import Episodes from "./Episodes";
import Locations from "./Locations";
import Location from "./Location";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/characters">Characters</NavLink>
            </li>
            <li>
              <NavLink to="/episodes">Episodes</NavLink>
            </li>
            <li>
              <NavLink to="/locations">Locations</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />}>
            <Route path=":id" element={<Character />} />
          </Route>
          <Route path="/episodes" element={<Episodes />}>
            <Route path=":id" element={<Episode />} />
          </Route>
          <Route path="/locations" element={<Locations />}>
            <Route path=":id" element={<Location />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
