import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import { AuthProvider } from "./context/ContextAuthProvider";
import { PrivateRoute } from "./component/PrivateRoute";
import ErrorBoundary from "./component/ErrorBoundary";

const NotFound = lazy(() => import("./NotFound"));
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login").then((module) => ({default: module.Login})));
const Episode = lazy(() => import("./Episode"));
const Episodes = lazy(() => import("./Episodes"));
const Character = lazy(() => import("./Character"));
const Characters = lazy(() => import("./Characters"));
const Location = lazy(() => import("./Location"));
const Locations = lazy(() => import("./Locations"));
// const AuthProvider = lazy(() => import("./component/AuthStatus").then((module) => ({default: module.AuthProvider})));
// const PrivateRoute = lazy(() => import("./component/PrivateRoute").then((module) => ({default: module.PrivateRoute})));

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
        <>
          <AuthProvider>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                  <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
                  <Route path="/characters">
                    <Route path=":id" element={<ErrorBoundary><PrivateRoute><Character /></PrivateRoute></ErrorBoundary>} />
                    <Route index element={<ErrorBoundary><PrivateRoute><Characters /></PrivateRoute></ErrorBoundary>} />
                  </Route>
                  <Route path="/episodes">
                    <Route path=":id" element={<ErrorBoundary><PrivateRoute><Episode /></PrivateRoute></ErrorBoundary>} />
                    <Route index element={<ErrorBoundary><PrivateRoute><Episodes /></PrivateRoute></ErrorBoundary>} />
                  </Route>
                  <Route path="/locations">
                    <Route path=":id" element={<ErrorBoundary><PrivateRoute><Location /></PrivateRoute></ErrorBoundary>} />
                    <Route index element={<ErrorBoundary><PrivateRoute><Locations /></PrivateRoute></ErrorBoundary>} />
                  </Route>
                  <Route path="/login" element={<ErrorBoundary><Login /></ErrorBoundary>} />
                  <Route path="*" element={<ErrorBoundary><NotFound /></ErrorBoundary>} />
              </Routes>
            </Suspense>
          </AuthProvider>
        </>
      </main>
    </div>
  );
}

export default App;
