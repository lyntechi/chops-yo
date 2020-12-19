import React from "react";
import { Link } from "react-router-dom";

export default function Trending(
  
  {
    data,
    title,
    arrowForFoods,
    arrowForDesserts,
    arrowForDrinks,
    goToDrinksMenu,
    goToDessertsMenu,
    goToFoodsMenu,
  }
) {
  return (
    <div className="trending-container">
      <h1>{title}</h1>
      <div className="item-cards">
        {data.map((item) => {
          return (
            <div className="item-cards-info">
              <Link to={`/item/${item.id}`}>
                {" "}
                <img src={item.image} alt="" />
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
      <Link to="/menu" style={{ textDecoration: "none" }}>
        {" "}
        <p>
          {goToFoodsMenu}
          {arrowForFoods}
        </p>
      </Link>
      <Link to="/desert-menu" style={{ textDecoration: "none" }}>
        {" "}
        <p>
          {goToDessertsMenu}
          {arrowForDesserts}
        </p>
      </Link>
      <Link to="/drinks-menu" style={{ textDecoration: "none" }}>
        {" "}
        <p>
          {goToDrinksMenu}
          {arrowForDrinks}
        </p>
      </Link>
    </div>
  );
}

