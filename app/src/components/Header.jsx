import React from "react";

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
          <img src="https://i.imgur.com/BOvZ79S.png" alt="" />
        </div>
      </div>
    </div>
  );
}
