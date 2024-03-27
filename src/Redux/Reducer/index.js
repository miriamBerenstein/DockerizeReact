import { combineReducers } from "redux";
import { productReducer } from "./ProductReduce";
import { cartReducer } from "./cartReducer";

export const allReducers = combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer
    })
