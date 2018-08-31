import {RECEIVE_PRODUCT, RECEIVE_PRODUCTS, REQUEST_PRODUCT, REQUEST_PRODUCTS} from "../actions/productsAction"

const productsReducer = (state = {isFetching: false, products: []}, action) => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return {
                ...state,
                isFetching: true
            };
        case REQUEST_PRODUCT:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                isFetching: false,
                products: action.products,
                lastUpdated: action.receivedAt
            };
        case RECEIVE_PRODUCT:
            return {
                ...state,
                isFetching: false,
                product: action.products,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};

export default productsReducer
