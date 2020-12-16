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
        <img src={image} alt="" className='media-only'/>

        <p>
          <AiOutlineMinus className="dash" />
          {smallTitle} <AiOutlineMinus className="dash" />
        </p>{" "}
        <p style={{ fontSize: "16px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <p style={{ fontSize: "16px" }}>
          dummy text of the printing and typesetting industry. Lorem Ipsum.
        </p>
        <p> {contact}</p>
      </div>
    </div>
  );
}
