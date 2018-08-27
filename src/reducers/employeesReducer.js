import {RECEIVE_EMPLOYEES, REQUEST_EMPLOYEES} from "../actions/employeesAction"

const employeesReducer = (state = {isFetching: false, employees: []}, action) => {
    switch (action.type) {
        case REQUEST_EMPLOYEES:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_EMPLOYEES:
            return {
                ...state,
                isFetching: false,
                employees: action.employees,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};

export default employeesReducer
