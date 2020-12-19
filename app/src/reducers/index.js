import { combineReducers } from "redux";
import trendingFoods from "./trendingFoods";
import trendingDesserts from "./trendingDesserts";
import trendingDrinks from "./trendingDrinks";
import foodsMenu from "./foodsMenu";
import dessertsMenu from "./dessertsMenu";
import drinksMenu from "./drinksMenu";
import infoAboutItem from "./infoAboutItem";

const allReducers = combineReducers({
  trendingFoods: trendingFoods,
  trendingDesserts: trendingDesserts,
  trendingDrinks: trendingDrinks,
  foodsMenu: foodsMenu,
  dessertsMenu: dessertsMenu,
  drinksMenu: drinksMenu,
  infoAboutItem: infoAboutItem,
});

export default allReducers;
