import React from "react";
import { GiKnifeFork } from "react-icons/gi";

export default function Hours() {
  return (
    <div className="hours-container">
      <h1>
        <GiKnifeFork className="hours-icons" /> OPENING HOURS{" "}
        <GiKnifeFork className="hours-icons" />
      </h1>
      <div className="hours-flex">
        <div className="hours-left">
          <h3>Sunday and Tuesday</h3>
          <p>Foods</p>
          <p>12:00AM - 3:00PM</p>
          <p>Dinners</p>
          <p>7:00pm - 10:00PM</p>
        </div>
        <div>
          <h3>Friday and Saturday</h3>
          <p>Foods</p>
          <p>12:00AM - 3:00PM</p>
          <p>Dinners</p>
          <p>7:00PM - 10:00PM</p>
        </div>
      </div>
    </div>
  );
}
