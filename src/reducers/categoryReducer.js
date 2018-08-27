import {RECEIVE_CATEGORY, REQUEST_CATEGORY} from "../actions/categoryAction"

const categoryReducer = (state = {isFetching: false, category: []}, action) => {
    switch (action.type) {
        case REQUEST_CATEGORY:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_CATEGORY:
            return {
                ...state,
                isFetching: false,
                category: action.category,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};


export default categoryReducer