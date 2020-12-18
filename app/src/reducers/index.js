import {combineReducers} from 'redux'
import trendingFoodsReducer from './trending-foods-reducer'

const allReducers = combineReducers({
    trendingFoods: trendingFoodsReducer
})