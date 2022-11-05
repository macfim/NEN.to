import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const [userUsername, setUserUsername] = useLocalStorage<string | null>(
    "username",
    null
  );

  return (
    <>
      <NavBar token={token} userUsername={userUsername} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="login"
          element={
            <Login setToken={setToken} setUserUsername={setUserUsername} />
          }
        />
        <Route
          path="register"
          element={
            <Register setToken={setToken} setUserUsername={setUserUsername} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
