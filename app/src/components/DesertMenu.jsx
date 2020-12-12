import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function DesertMenu({ desertMenu }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="menu-container">
      {desertMenu.map((item) => {
        return (
          <div className="recipe-titles">
            <Link to={`/item/${item.id}`}>
              {" "}
              <img src={item.image} alt="" className="recipe-img" />
            </Link>
            <p className="menu-p">{item.name}</p>
            <p className="menu-p">
              <span className="dollar-sign">$</span>
              {item.price}
            </p>
          </div>
        );
      })}
    </div>
  );
}
