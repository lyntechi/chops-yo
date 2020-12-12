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
import { data } from "./data";
import { desertsdata } from "./data";
import { Route } from "react-router-dom";

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
          <Recipes data={data} title={"Popular Foods"} />
        </section>
        <section className="recipes-section">
          <Recipes data={desertsdata} title={"Popular Deserts"} />
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
    </div>
  );
}
