import {RECEIVE_PRODUCT, REQUEST_PRODUCT} from "../actions/productsAction"

const productDetailsReducer = (state = {isFetching: false, product: null}, action) => {
    switch (action.type) {
        case REQUEST_PRODUCT:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_PRODUCT:
            return {
                ...state,
                isFetching: false,
                product: action.product,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};

export default productDetailsReducer
