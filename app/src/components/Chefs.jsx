import React from "react";
import chefhat from "../images/chef.png";
import { AiOutlineMinus } from "react-icons/ai";

export default function Chefs({ image, title, smallTitle, contact }) {
  return (
    <div className="chefs-container">
      <img src={image} alt="" className="chef-img" />

      <div className="chef-details">
        {" "}
        <img src={chefhat} alt="" className="chef-hat" />
        <h1>{title}</h1>
        <p>
          <AiOutlineMinus className="dash" />
          {smallTitle} <AiOutlineMinus className="dash" />
        </p>{" "}
        <p style={{ fontSize: "16px" }}>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page.
        </p>
        <p style={{ fontSize: "16px" }}>
          I’m a great place for you to tell a story and let your users know a
          little more about you.​
        </p>
        <p style={{ fontSize: "16px" }}>
          I’m a great place for you to tell a story and let your users know a
          little more about you.​{" "}
        </p>
        <p> {contact}</p>
      </div>
    </div>
  );
}
