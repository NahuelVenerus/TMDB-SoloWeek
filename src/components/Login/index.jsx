import axios from "axios";
import useInput from "../../hooks/useInput";
import { LOCALHOST } from "../../utils/BASE_API";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

export default function Login() {
  const username = useInput();
  const password = useInput();
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const logUser = { username: username.value, password: password.value };
    axios
      .post(`${LOCALHOST}/api/users/login`, logUser, { withCredentials: true })
      .then((res) => res.data)
      .then((resp) => {
        user.logUser(resp);
        navigate("/");
      })
      .catch((err) => console.log("estoy en el catch de logUser", err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ color: "white" }}>Usuario</label>
      <input
        placeholder="Ingrese su usuario"
        style={{ marginBottom: "1%" }}
        {...username}
      ></input>
      <br />
      <label style={{ color: "white" }}>Password</label>
      <input
        placeholder="Ingrese su contraseña"
        style={{ marginBottom: "1%" }}
        {...password}
      ></input>
      <br />
      <input type="submit"></input>
    </form>
  );
}
