import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import About from "./components/About";
import Hours from './components/Hours'

export default function App() {
  return (
    <div className="App">
      <section className="nav-section">
        <Nav />
      </section>
      <section className="header-section">
        <Header />
      </section>
      <section className="recipes-section">
        <Recipes />
      </section>
      <section className="about-section">
        <About />
      </section>
      <section className="hours-section">
        <Hours />
      </section>
    </div>
  );
}
