import React from "react";
import { Link } from "react-router-dom";

export default function Trending({
  data,
  title,
  arrowForFoods,
  arrowForDesserts,
  arrowForDrinks,
  goToDrinksMenu,
  goToDessertsMenu,
  goToFoodsMenu,
}) {
  return (
    <div className="trending-container">
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
      <Link to="/menu" style={{ textDecoration: "none" }}>
        {" "}
        <p className="see-more">
          {goToFoodsMenu}
          {arrowForFoods}
        </p>
      </Link>
      <Link to="/desert-menu" style={{ textDecoration: "none" }}>
        {" "}
        <p className="see-more">
          {goToDessertsMenu}
          {arrowForDesserts}
        </p>
      </Link>
      <Link to="/drinks-menu" style={{ textDecoration: "none" }}>
        {" "}
        <p className="see-more">
          {goToDrinksMenu}
          {arrowForDrinks}
        </p>
      </Link>
    </div>
  );
}
