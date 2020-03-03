import React from "react";
import "../App.css";

export default function DateAndTime() {
  var today = new Date();

  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var n = today.getDay();

  console.log(time);
  console.log(n);

  function openOrClosed() {
    if (n === 6 && n === 7 && time < 8 && time > 18) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <div>
      <p className="bottom">Phone number: 06-12345678</p>
      <p className="date">
        The practice is <strong>{openOrClosed ? "open" : "closed"}</strong> at
        the moment
      </p>
    </div>
  );
}
