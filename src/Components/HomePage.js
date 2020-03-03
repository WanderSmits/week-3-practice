import React from "react";
import { Link } from "react-router-dom";
import DateAndTime from "./DateAndTime";
import "../App.css";

export default function HomePage() {
  return (
    <div className="patientLink">
      <br />
      <br />
      <h1>
        <Link to={`/NewPatient/`} class="btn btn-link">
          New patient?{" "}
        </Link>
      </h1>
      <br />
      <h1>
        <Link to={`/Duty/`} class="btn btn-link">
          Who is on duty?{" "}
        </Link>
      </h1>
      <br />
      <footer>
        <DateAndTime />
      </footer>
    </div>
  );
}
