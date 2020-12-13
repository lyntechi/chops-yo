import React from "react";
import steak4 from "../images/steak4.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="grid">
        <div className="left-col">
          <h1 className="header-h1">
            CHOPS-YO RESTAURANT WILL NOW DELIVER NEAR YOUR PLACE
          </h1>
          <p className="header-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <button className="order-btn">Order Now</button>
        </div>
        <div className="right-col">
          <img src={steak4} alt="" className="wings-img" />
        </div>
      </div>
    </div>
  );
}