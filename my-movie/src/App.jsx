import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Utility/privateRoute";

import HomePage from "./Page/HomePage/index.tsx";
import Film from "./Page/Film/index.jsx";
import Preferiti from "./Page/Preferiti/index.jsx";

import LoginPage from "./Page/LogInPage/index.jsx";
import useStore from "./Utility/useStore/store.jsx";
import NotFoundPage from "./Page/pageNotFound/index.jsx";

function App() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  //const [count, setCount] = useState(0);

  console.log("*********************", isAuthenticated);

  return (
    <Router basename="/my-movie-app/">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute
              element={HomePage}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/film"
          element={
            <PrivateRoute element={Film} isAuthenticated={isAuthenticated} />
          }
        />
        <Route
          path="/preferiri"
          element={
            <PrivateRoute
              element={Preferiti}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
