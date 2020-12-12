import React from "react";

export default function Hours() {
  return (
    <div className="hours-container">
      <h1 className="hours-h1">OPENING HOURS</h1>
      <p className="hours-p">Call For Reservations Or Schedule Below</p>
      <div className="hours-flex">
        <div className="hours-left">
          <h3 className="hours-h3">
            Sunday to
            <br /> Tuesday
          </h3>
          <h3 className="hours-h3">
            10:00AM
            <br /> 9:00PM
          </h3>
        </div>
        <div>
          <h3 className="hours-h3">
            Friday and
            <br /> Saturday
          </h3>
          <h3 className="hours-h3">
            1:00PM
            <br /> 2:00AM
          </h3>
        </div>
      </div>
    </div>
  );
}
