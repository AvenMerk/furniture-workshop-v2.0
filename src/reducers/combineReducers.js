import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import productsReducer from "./productsReducer";
import productDetailsReducer from "./productDetailsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    productsReducer,
    categoryReducer,
    productDetailsReducer,
    cartReducer,
});

export default rootReducer
