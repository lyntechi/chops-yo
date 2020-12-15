import React from "react";
import steak4 from "../images/steak4.png";

export default function Header() {
  const alertMsg = () => {
    alert("Ordering feature is still being worked on.");
  };
  return (
    <div className="header-container">
      <div className="grid">
        <div className="left-col">
          <h1>CHOPS-YO RESTAURANT WILL NOW DELIVER NEAR YOUR PLACE</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <button onClick={alertMsg}>Order Now</button>
        </div>
        <div className="right-col">
          <img
            src="http://pluspng.com/img-png/barbecue-food-png-bbq-transparent-background-700.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
