import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import productsReducer from "./productsReducer";
import employeesReducer from "./employeesReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    productsReducer,
    categoryReducer,
    employeesReducer,
    productReducer
});

export default rootReducer