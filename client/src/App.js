import Home from "./pages/home/Home.jsx";

import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Write from "./pages/write/Write.jsx";
import { Single } from "./pages/single/Single.jsx";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context.js";
import Topbar from "./components/top/Topbar.jsx";
function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Topbar />

      <Routes>
        <Route exact path="/Todo-App" element={<Home />} />
        <Route
          path="/Todo-App/register"
          element={user ? <Home /> : <Register />}
        />
        <Route path="/Todo-App/login" element={user ? <Home /> : <Login />} />
        <Route
          path="/Todo-App/write"
          element={user ? <Write /> : <Register />}
        />

        <Route path="/Todo-App/post/:postId" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
