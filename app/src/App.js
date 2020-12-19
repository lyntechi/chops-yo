import React from "react";
import "./styles/main.scss";
import Header from "./components/Header";
import Trending from "./components/Trending";
import About from "./components/About";
import Hours from "./components/Hours";
import Chefs from "./components/Chefs";
import IndividualItem from "./components//IndividualItem";
import Menu from "./components/Menu";
import ButtonAppBar from "./components/ButtonAppBar";
import FooterPage from "./components/Footer.jsx";
import { dessertsMenu, drinksMenu } from "./data";
import { Route } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <section className="nav-section">
        <ButtonAppBar />
      </section>

      <Route exact path="/">
        <section className="header-section">
          <Header />
        </section>
        <section className="trending-section" id="foods">
          <Trending
            data={props.trendingFoods}
            title={"Trending Foods"}
            goToFoodsMenu="Go To Full Menu"
            arrowForFoods={<BsArrowBarRight className="arrow" />}
          />
        </section>
        <section className="trending-section" id="desserts">
          <Trending
            data={props.trendingDesserts}
            title={"Trending Desserts"}
            goToDessertsMenu="Go To Full Menu"
            arrowForDesserts={<BsArrowBarRight className="arrow" />}
          />
        </section>
        <section className="trending-section" id="drinks">
          <Trending
            data={props.trendingDrinks}
            title={"Trending Drinks"}
            goToDrinksMenu="Go To Full Menu"
            arrowForDrinks={<BsArrowBarRight className="arrow" />}
          />
        </section>
        <section className="about-section" id="about">
          <About />
        </section>
        <section className="chefs-section" id="chefs">
          <Chefs
            image="https://i.imgur.com/FZRKs9c.jpg"
            title="Meet The Chef"
            smallTitle="Known As One Of The Best In Town"
            contact="Tel: 123-456-7890 | Email: chef@chops.com"
          />
          <Chefs
            image="https://i.imgur.com/hdyJmMH.png"
            title="Where The Food’s As Good As The Root Beer."
            smallTitle="Satisfying people hunger for simple pleasures
            "
          />
        </section>
        <section className="hours-section" id="hours">
          <Hours />
        </section>
      </Route>
      <Route exact path="/item/:id">
        <section className="individual-section">
          <IndividualItem />
        </section>
      </Route>
      <Route exact path="/menu">
        <section className="menu-section">
          <Menu menu={props.foodsMenu} />
        </section>
      </Route>
      <Route exact path="/desert-menu">
        <section className="menu-section">
          <Menu menu={dessertsMenu} />
        </section>
      </Route>
      <Route exact path="/drinks-menu">
        <section className="menu-section">
          <Menu menu={drinksMenu} />
        </section>
      </Route>
      <section className="footer-section">
        <div className="footer-container">
          <FooterPage />
        </div>
      </section>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("this is mapstate", state);

  return {
    trendingFoods: state.trendingFoods,
    trendingDesserts: state.trendingDesserts,
    trendingDrinks: state.trendingDrinks,
    foodsMenu: state.foodsMenu,
  };
}

export default connect(mapStateToProps, {})(App);
