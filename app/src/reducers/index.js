import { combineReducers } from "redux";
import trendingFoodsReducer from "./reducer-trending-foods";
import trendingDessertsReducer from "./reducer-trending-desserts";
import trendingDrinksReducer from './reducer-trending-drinks'

const allReducers = combineReducers({
  trendingFoods: trendingFoodsReducer,
  trendingDesserts: trendingDessertsReducer,
  trendingDrinks: trendingDrinksReducer
});

export default allReducers