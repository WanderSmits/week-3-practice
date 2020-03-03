import React, { useState, useEffect } from "react";
import DateAndTime from "./DateAndTime";
import "../App.css";

export default function WhoIsOnDuty() {
  const [page, setPage] = useState("Loading");
  // const [status, set_search_status] = useState("Loading");

  useEffect(() => {
    const duty = async () => {
      const response = await fetch(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      ).then(r => r.json());

      setPage(response);
    };
    duty();
  }, []);

  console.log(page);

  return (
    <div>
      <h1>All the available doctors at the moment</h1>
      <div>
        <table className="dutyTable">
          <thead>
            <tr>
              <th>Doctor </th>
              <th> Available </th>
            </tr>
          </thead>
          {page === "Loading"
            ? "Loading"
            : page.map(doctor => {
                return (
                  <tbody key={doctor.id}>
                    <tr className="dutyTableRow">
                      <td>{doctor.doctor}</td>
                      <td>{doctor.onDuty ? "on duty" : "not on duty"}</td>
                    </tr>
                  </tbody>
                );
              })}
        </table>
      </div>
      <div></div>
      <DateAndTime />
    </div>
  );
}
