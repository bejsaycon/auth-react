import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  
  //Create module for post requests 
  const handleRegistration = (event) => {
    event.preventDefault();
    const userRegistrationData = {
      name: event.target.username.value,
      password: event.target.password.value,
    };
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRegistrationData),
    })
      .then((data) => {
        console.log(data.status);
        console.log(data);
        if (data.status === 201) {
          setSuccess(true);
        } else if (data.status === 400) {
          setErrMsg("Username Taken");
          setTimeout(()=>setErrMsg(""), 2000);
        } 
      })
      .catch((err) => {
        //bj dont know how to throw error from express server --> time wasted: 1day
        if (!err?.response) {
          setErrMsg("No Server Response");
          setTimeout(()=>setErrMsg(""), 2000);
        }
      })
      .finally(() => event.target.reset());
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <Link to="/login">
            <p>Sign In</p>
          </Link>
        </section>
      ) : (
        <section>
          <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
          <form onSubmit={handleRegistration}>
            <h2>Register</h2>
            <label>username</label>
            <input
              type="text"
              name="username"
              required
            />
            <label>password</label>
            <input type="password" name="password" required />
            <button type="submit">Sign up</button>
          </form>
          <p>Already have an Account? <Link to="/login">Login</Link></p>
        </section>
      )}
    </>
  );
};

export default Register;
