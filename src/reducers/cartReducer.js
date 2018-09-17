import {REQUEST_CART, RECEIVE_CART} from '../actions/cartAction';


const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_CART:
            return {
                ...state,
                sending: true
            };
        case RECEIVE_CART:
            return {
                ...state,
                sending: false,
                response: action.response
            };
        default:
            return state
    }
};

export default cartReducer