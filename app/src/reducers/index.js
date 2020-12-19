import { combineReducers } from "redux";
import trendingFoods from "./trendingFoods";
import trendingDesserts from "./trendingDesserts";
import trendingDrinks from "./trendingDrinks";
import foodsMenu from "./foodsMenu";

const allReducers = combineReducers({
  trendingFoods: trendingFoods,
  trendingDesserts: trendingDesserts,
  trendingDrinks: trendingDrinks,
  foodsMenu: foodsMenu,
});

export default allReducers;
