import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import productsReducer from "./productsReducer";
import employeesReducer from "./employeesReducer";
import productDetailsReducer from "./productDetailsReducer";

const rootReducer = combineReducers({
    productsReducer,
    categoryReducer,
    employeesReducer,
    productDetailsReducer
});

export default rootReducer
