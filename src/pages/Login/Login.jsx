import { useRef } from "react";

function Login() {
    const usernameref = useRef()
    const passwordref = useRef()
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 500,
            margin: "0 auto",
            gap: "2em",
          }}
        >
          <h3>Login User</h3>
          <form
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
              <input type="password" name="password" ref={passwordref}/> <br />
              <input type="submit" value="login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
