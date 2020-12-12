import React from "react";
import { Link } from "react-router-dom";

export default function Recipes({ data, title }) {
  return (
    <div className="recipes-container">
      <h1 className="recipes-h1">{title}</h1>
      <div className="recipes">
        {data.map((item) => {
          return (
            <div className="recipe-titles">
              <Link to={`/item/${item.id}`}>
                {" "}
                <img src={item.image} alt="" className="recipe-img" />
              </Link>
              <p className="recipes-p">{item.name}</p>
              <p className="recipes-p">
                <span className="dollar-sign">$</span>
                {item.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
