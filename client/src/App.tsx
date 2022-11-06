import { Routes, Route } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import useLocalStorage from "./hooks/useLocalStorage";

import { toastContext } from "./context/toast";

const App = () => {
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const [userUsername, setUserUsername] = useLocalStorage<string | null>(
    "username",
    null
  );
  const toast = useToast();

  return (
    <toastContext.Provider value={toast}>
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
    </toastContext.Provider>
  );
};

export default App;
