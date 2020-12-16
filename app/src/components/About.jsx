import React from "react";
import { BsArrowBarRight } from "react-icons/bs";
import vegan from "../images/vegan.png";

export default function About() {
  return (
    <div className="about-container">
      <img src={vegan} className="vegan-dish" alt="" />
      <img src="https://i.imgur.com/eUYfJJ4.png" alt="" className="dish-icon" />
      <h1 className="about-h1">About Our Food & Restaurant</h1>
      <p className="about-p">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin
      </p>
      <div className="grid">
        <div className="left-col">
          <h1 className="food-h1">Top Quality Food</h1>{" "}
          <p className="food-p">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia,.
          </p>
          <h5 className="about-h5">
            Read More <BsArrowBarRight className="arrow" />
          </h5>
        </div>
        <div className="right-col">
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
            className="chef-img"
          />
        </div>
      </div>
    </div>
  );
}
