import { applyMiddleware, createStore } from "redux";
import { allReducers } from "./Reducer/index";
import { addToCartMW } from "./middleware/middlewareQty";

const store = createStore (
    allReducers, 
    applyMiddleware(addToCartMW,)
)

store.getState();
export default store;
