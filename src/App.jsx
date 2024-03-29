import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <NavLink>

              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/characters' element={<Characters />}>
            <Route path='/:id' element={<Character />} />
          </Route>
          <Route path='/episodes' element={<Episodes />}>
            <Route path='/:id' element={<Episode />} />
          </Route>
          <Route path='/locations' element={<Locations />}>
            <Route path='/:id' element={<Location />} />
          </Route>
          <Route path='*' element={<NotFound />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
