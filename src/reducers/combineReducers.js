import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import productsReducer from "./productsReducer";
import employeesReducer from "./employeesReducer";
import productDetailsReducer from "./productDetailsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    productsReducer,
    categoryReducer,
    employeesReducer,
    productDetailsReducer,
    cartReducer
});

export default rootReducer
