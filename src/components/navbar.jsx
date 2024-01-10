import React from "react";
import { NavLink } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Navbar = () => {
  const { logoutUser } = useLogin();
  return (
    <div style={{ display: "flex", justifyContent: "space-between " }}>
      <NavLink to={"/"}>
        <h2>Tracom Academy</h2>
      </NavLink>
      <div style={{ display: "flex", gap: "2em" }}>
        <NavLink to={"/"}>
          <h3>Home</h3>
        </NavLink>

        <NavLink to={"/contact"}>
          <h3>Contact</h3>
        </NavLink>

        <NavLink to={"/users"}>
          <h3>users</h3>
        </NavLink>
        <NavLink to={"/login"} onClick={() => logoutUser()}>
          <h3>logout</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
