import "./Login.css";
import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";

function Login() {
  const { name, login } = useContext(Context);

  return (
    <div className="loginWrapper">
      <Link to="/profile">{login ? name : "Sign in"}</Link>
    </div>
  );
}

export default Login;
