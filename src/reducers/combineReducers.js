import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import productsReducer from "./productsReducer";
import employeesReducer from "./employeesReducer";

const rootReducer = combineReducers({
    productsReducer,
    categoryReducer,
    employeesReducer
});

export default rootReducer