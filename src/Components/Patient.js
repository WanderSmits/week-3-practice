import React, { useState } from "react";
import "../App.css";

export default function Patient(props) {
  const [details, setDetails] = useState(false);

  function showDetails() {
    setDetails(!details);
  }

  return (
    <div className="patient">
      <p>
        <strong>Name:</strong> {props.firsName} {props.lastName}
      </p>
      <p>
        <strong>id:</strong> {props.id}
      </p>
      <p>
        <strong>Date of birth:</strong> {props.dateOfBirth}
      </p>

      <p>
        {details && (
          <>
            <strong>Email: </strong>
            {props.email}
          </>
        )}
      </p>
      <p>
        {details && (
          <>
            {" "}
            <strong>Gender: </strong>
            {props.gender}
          </>
        )}
      </p>
      <p>
        {details && (
          <>
            {" "}
            <strong>Phone number: </strong>
            {props.phoneNumber}
          </>
        )}
      </p>
      <ol>
        {details &&
          props.prescriptions.map(prescript => {
            return prescript ? (
              <p>
                <>
                  <strong>Prescriptions:</strong>
                  {prescript}
                </>
              </p>
            ) : (
              <p>
                <>
                  {" "}
                  <strong>Prescriptions:</strong>: None{" "}
                </>
              </p>
            );
          })}
      </ol>

      <button class="btn btn-info" onClick={showDetails}>
        Show details
      </button>
      <br />
      <br />
      <br />
    </div>
  );
}
