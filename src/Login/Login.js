import "./Login.css";
import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";

function Login() {
  const { name, login } = useContext(Context);
  function letters(name) {
    const arr = name.toString().split(" ");
    const letters = arr.map((e) => {
      return e[0];
    });

    if (letters.length > 1) {
      return letters[0] + letters[1];
    } else return letters[0];
  }

  return (
    <div className="loginWrapper">
      <Link to="/profile">
        {login ? <div className="nameWrapper">{letters(name)}</div> : "Sign in"}
      </Link>
    </div>
  );
}

export default Login;
