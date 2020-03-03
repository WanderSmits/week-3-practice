import React, { useState } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";

export default function NewPatient() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [sub, setSub] = useState(false);

  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }

  function handleGender(event) {
    setGender(event.target.value);
  }

  function handleDate(event) {
    setDateOfBirth(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("What is my first name?", firstName);
    console.log("What is my last name?", lastName);
    console.log("What is my email?", email);
    console.log("What is my phone?", phoneNumber);
    console.log("What is my gender?", gender);
    console.log("What is my date?", dateOfBirth);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setGender("");
    setDateOfBirth("");
    setSub(true);
  }
  console.log(sub);
  function showMessage() {
    console.log("something");
  }

  console.log(sub);
  return (
    <div>
      <main>
        <h1>Sign up:</h1>
        <form onSubmit={handleSubmit} className="form">
          <label>First name: </label>
          <input value={firstName} onChange={handleFirstName}></input>
          <br />

          <label>Last name: </label>
          <input value={lastName} onChange={handleLastName}></input>
          <br />

          <label>E-mail: </label>
          <input value={email} onChange={handleEmail}></input>
          <br />

          <label>Phone Number: </label>
          <input value={phoneNumber} onChange={handlePhoneNumber}></input>

          <br />
          <br />

          <label>
            Gender:
            <select
              class="btn btn-primary"
              value={gender}
              onChange={handleGender}
            >
              <option value=""></option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
          </label>

          <br />
          <br />
          <br />
          <label>Date of Birth: </label>
          <input type="date" value={dateOfBirth} onChange={handleDate}></input>

          <br />
          <br />
          <button type="onSubmit" class="btn btn-primary" onClick={showMessage}>
            Submit
          </button>
        </form>
      </main>
      <footer>
        <br />
        <br />
        <br />
        <p className="message">{sub && "You have been added as a patient"}</p>
      </footer>
    </div>
  );
}
