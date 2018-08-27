import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
    productsReducer,
    categoryReducer
});

export default rootReducer