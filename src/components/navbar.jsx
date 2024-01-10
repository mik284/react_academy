import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <NavLink to={"/login"}>
          <h3>login</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
