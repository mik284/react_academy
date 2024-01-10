import { useRef } from "react";
import useLogin from "../../hooks/useLogin";

function Login() {
  const usernameref = useRef();
  const passwordref = useRef();
  const {checkStatus} = useLogin()

  const handleSubmit =(e)=>{
    e.preventDefault()
    const payload = {
        username: usernameref.current.value,
        password: passwordref.current.value
    }
    checkStatus(payload)
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          margin: "0 auto",
          gap: "2em",
        }}
      >
        <h3 style={{textAlign: "center"}}>Login User</h3>
        <form onSubmit={handleSubmit}
          style={{
            border: "1px solid grey",
            padding: "2em",
            borderRadius: 5,
          }}
        >
          <div style={{ display: "grid" }}>
            <label htmlFor="username">username: </label>
            <input type="text" name="username" ref={usernameref} /> <br />
            <label htmlFor="password">password: </label>
            <input type="password" name="password" ref={passwordref} /> <br />
            <input type="submit" value="login" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
