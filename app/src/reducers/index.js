import { combineReducers } from "redux";
import trendingFoodsReducer from "./reducer-trending-foods";
import trendingDessertsReducer from "./reducer-trending-desserts";
import trendingDrinksReducer from './reducer-trending-drinks'

export const allReducers = combineReducers({
  trendingFoods: trendingFoodsReducer,
  trendingDesserts: trendingDessertsReducer,
  trendingDrinks: trendingDrinksReducer
});
