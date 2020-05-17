import {combineReducers} from "redux";
import changeCategoryReducer from "../reducers/changeCategoryReducer";
import categoryListReducer from "../reducers/categoryListReducer";
import productListReducer from "../reducers/productListReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer
});

export default rootReducer;
