import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function NavBar() {
  return (
    <div className="next">
      <nav>
        <NavLink
          activeStyle={{ fontWeight: "bold", color: "red" }}
          exact={true}
          to="/"
        >
          Homepage
        </NavLink>
        <br />
        <NavLink
          activeStyle={{ fontWeight: "bold", color: "red" }}
          exact={true}
          to="/NewPatient"
        >
          New Patient
        </NavLink>
        <br />
        <NavLink
          activeStyle={{ fontWeight: "bold", color: "red" }}
          exact={true}
          to="/Duty"
        >
          Who is on duty
        </NavLink>
        <br />
        <NavLink
          activeStyle={{ fontWeight: "bold", color: "red" }}
          exact={true}
          to="/database"
        >
          Database
        </NavLink>
      </nav>
    </div>
  );
}
