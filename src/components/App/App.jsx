import "../../styles/App.css";
import { AuthContext } from "../../context/AuthContext";
import { LOCALHOST } from "../../utils/BASE_API";
import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router";
import axios from "axios";
import Navbar from "../../commons/Navbar";
import Details from "../Details";
import Login from "../Login";
import Signup from "../Signup";
import Bienvenido from "../Bienvenido";
import Movies from "../Movies";
import Series from "../Series";

function App() {
  const { logUser } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${LOCALHOST}/api/users/me`, { withCredentials: true })
      .then((res) => {
        logUser(res.data);
      })
      .catch(() => console.log("Error"));
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <Navbar />
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Bienvenido />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route
          path="*"
          element={<h1 style={{ color: "white" }}>Error 404</h1>}
        />
      </Routes>
    </div>
  );
}
export default App;
