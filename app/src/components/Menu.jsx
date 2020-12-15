import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Menu({ menu }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="menu-container">
      {menu.map((item) => {
        return (
          <div className="menu-titles">
            <Link to={`/item/${item.id}`}>
              {" "}
              <img src={item.image} alt="" className="recipe-img" />
            </Link>
            <p>{item.name}</p>
            <p>
              <span className="dollar-sign">$</span>
              {item.price}
            </p>
          </div>
        );
      })}
    </div>
  );
}
