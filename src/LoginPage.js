import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "./RandomUserApp/custom_hooks/useAuth";

const LoginPage = () => {
  const {setAuth} = useAuth();
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const userLoginData = {
      name: event.target.username.value,
      password: event.target.password.value,
    };
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLoginData),
    })
      .then((data) => {
        if (data.status === 200) {
          setAuth(true);
          setSuccess(true);
        } else if (data.status === 400) {
          setErrMsg("Cannot Find User");
          setTimeout(() => setErrMsg(""), 2000);
        } else {
          setErrMsg("Unauthorized");
          setTimeout(() => setErrMsg(""), 2000);
        }
      })
      .catch((err) => {
        if (!err?.response) {
          setErrMsg("No Server Response");
          setTimeout(() => setErrMsg(""), 2000);
        }
      })
      .finally(() => event.target.reset());
  };
  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to="/randomapp">
            Go to App
            </Link>
          </p>
        </section>
      ) : (
        <section>
          <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <label>username</label>
            <input type="text" name="username" required />
            <label>password</label>
            <input type="password" name="password" required />
            <button type="submit">Login</button>
          </form>
          <p>
            No Account yet? <Link to="/register">Register</Link>
          </p>
        </section>
      )}
    </>
  );
};

export default LoginPage;
