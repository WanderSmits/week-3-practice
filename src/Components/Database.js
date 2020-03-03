import React, { useState, useEffect } from "react";
import Patient from "./Patient";
import "bootstrap/dist/css/bootstrap.min.css";

function sortByName(nameA, nameB) {
  return nameA.lastName.localeCompare(nameB.lastName);
}

export default function Database(props) {
  const [database, setDatabase] = useState([]);
  const [doctorDatabase, setDoctorDatabase] = useState("Loading");
  const [selectDoctor, setSelectDoctor] = useState("all");

  useEffect(() => {
    const retrieveData = async () => {
      const data = await fetch(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      ).then(r => r.json());

      console.log(data);
      setDatabase(data.sort(sortByName));
    };
    retrieveData();
  }, []);

  useEffect(() => {
    const retrieveData2 = async () => {
      const response = await fetch(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      ).then(r => r.json());

      console.log(response);
      setDoctorDatabase(response);
    };
    retrieveData2();
  }, []);

  let sortedNames = [...database].sort(sortByName);

  console.log(doctorDatabase);

  let doctorId = [...doctorDatabase];

  let filteredArray =
    database === []
      ? []
      : [...sortedNames].filter(patient => {
          if (selectDoctor === "all") {
            return patient;
          } else if (patient.doctorId === Number(selectDoctor)) {
            return patient;
          }
        });
  console.log("filter", filteredArray);

  // console.log(selectDoctor);

  return (
    <div>
      <br />
      <select
        class="btn btn-info"
        value={selectDoctor}
        onChange={e => setSelectDoctor(e.target.value)}
      >
        <option value="all">All</option>
        {doctorId.map(doctor => (
          <option key={doctor.id} value={doctor.id}>
            {doctor.doctor}
          </option>
        ))}
      </select>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ul>
        {filteredArray.map(patients => {
          return (
            <Patient
              key={patients.id}
              firstName={patients.firstName}
              lastName={patients.lastName}
              id={patients.id}
              dateOfBirth={patients.dateOfBirth}
              email={patients.email}
              gender={patients.gender}
              phoneNumber={patients.phoneNumber}
              prescriptions={patients.prescriptions}
            />
          );
        })}
      </ul>
    </div>
  );
}
