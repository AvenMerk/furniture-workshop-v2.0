import {REQUEST_CART, RECEIVE_CART, RECEIVE_CART_ERROR} from '../actions/cartAction';


const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_CART:
            return {
                ...state,
                type: REQUEST_CART,
                sending: true
            };
        case RECEIVE_CART:
            return {
                ...state,
                type: RECEIVE_CART,
                sending: false,
                response: action.response
            };
            case RECEIVE_CART_ERROR:
            return {
                ...state,
                type: RECEIVE_CART_ERROR,
                sending: false,
                error: action.error
            };
        default:
            return state
    }
};

export default cartReducer