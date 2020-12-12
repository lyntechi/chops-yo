import React from "react";
import Cards from "./Cards";
import chefhat from "../images/chef.png";
import { AiOutlineMinus } from "react-icons/ai";

export default function Chefs() {
  return (
    <div className="chefs-container">
      <img src={chefhat} alt="" className="chef-hat" />
      <h1 className="chefs-h1">Our Chefs</h1>
      <p className="chefs-p">
        <AiOutlineMinus className="dash" />
        The Masters Behind The Best Foods <AiOutlineMinus className="dash" />
      </p>
     <div className="cards-container"> <Cards /></div>
     
    </div>
  );
}
