import React from "react";
import { GiCrenelCrown } from "react-icons/gi";
import { AiOutlineMinus } from "react-icons/ai";
import DatePickers from "./DatePickers";


export default function Reservations() {
  return (
    <div className="reservations-container">
      <GiCrenelCrown className="crown-icon" />
      <h1 className="reservation-h1">RESERVATION</h1>
      <p className="reserv-p">
        <AiOutlineMinus className="dash-r" />
        Please Book Your Table <AiOutlineMinus className="dash-r" />
      </p>
      <form>
        <div className="first-row">
          <input type="text" placeholder="YOUR NAME*" />
          <br />
          <select>
            <option>OCCASION</option>
            <option>REGULAR DINE-IN</option>
            <option>BIRTHDAY</option>
            <option>WEDDING</option>
          </select>
          <br />
          <input type="text" placeholder="ANY FOOD ALLERGIES?" />
          <br />
          <input type="text" placeholder="PHONE NUMBER #" />
          <br />
        </div>{" "}
        <div>
          <input type="email" placeholder="EMAIL" />
          <br />
          <br />
          <select>
            <option>PREFERED FOOD</option>
            <option>SEA FOOD</option>
            <option>CHICKEN</option>
            <option>STEAK</option>
            <option>DESERTS</option>
          </select>{" "}
          <br />
          <br />
          <input type="text" placeholder="NUMBER OF PEOPLE" />
          <br />
          <br />
          <DatePickers /> <br />
        </div>
        <textarea placeholder='ANYTHING ELSE WE SHOULD KNOW?'/>
      </form>{" "}
      <button className='form-btn'>Find A Table</button>
    </div>
  );
}
