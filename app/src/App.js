import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import About from "./components/About";
import Hours from "./components/Hours";
import Chefs from "./components/Chefs";
import Reservations from "./components/Reservations";
import IndividualItem from "./components//IndividualItem";
import FoodMenu from "./components/FoodMenu";
import DesertMenu from "./components/DesertMenu";
import DrinksMenu from "./components/DrinksMenu";
import { data, fullMenu, desertsdata, desertMenu, beveragesData } from "./data";
import { Route } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";

export default function App() {
  return (
    <div className="App">
      <section className="nav-section">
        <Nav />
      </section>
      <Route exact path="/">
        <section className="header-section">
          <Header />
        </section>
        <section className="recipes-section">
          <Recipes
            data={data}
            title={"Trending Foods"}
            foodMenu="Go To Full Menu"
            foodlogo={<BsArrowBarRight className="arrow" />}
          />
        </section>
        <section className="recipes-section">
          <Recipes
            data={desertsdata}
            title={"Trending Desserts"}
            desertMenu="Go To Full Menu"
            desertlogo={<BsArrowBarRight className="arrow" />}
          />
        </section>
        <section className="recipes-section">
          <Recipes
            data={beveragesData}
            title={"Trending Drinks"}
            drinksTitle="Go To Full Menu"
            drinkslogo={<BsArrowBarRight className="arrow" />}
          />
        </section>
        <section className="about-section">
          <About />
        </section>
        <section className="hours-section">
          <Hours />
        </section>
        <section className="chefs-section">
          <Chefs />
        </section>
        <section className="reservations-section">
          <Reservations />
        </section>
      </Route>
      <Route exact path="/item/:id">
        <section className="individual-section">
          <IndividualItem />
        </section>
      </Route>
      <Route exact path="/menu">
        <section className="menu-section">
          <FoodMenu fullMenu={fullMenu} />
        </section>
      </Route>
      <Route exact path="/desert-menu">
        <section className="menu-section">
          <DesertMenu desertMenu={desertMenu} />
        </section>
      </Route>
      <Route exact path="/drinks-menu">
        <section className="menu-section">
          <DrinksMenu beveragesData={beveragesData} />
        </section>
      </Route>
    </div>
  );
}
