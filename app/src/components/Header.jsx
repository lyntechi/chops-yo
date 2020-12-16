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
            src="http://lapetitechaumette.l.a.pic.centerblog.net/kisspng-kebab-brochette-shashlik-hors-d-oeuvre-pincho-shish-kabob-house-5b2ab1a0bae840.9172554215295246407656.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
