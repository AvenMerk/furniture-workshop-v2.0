export const REQUEST_EMPLOYEES = 'REQUEST_EMPLOYEES';
export const RECEIVE_EMPLOYEES = 'RECEIVE_EMPLOYEES';

export const requestEmployees = () => ({
    type: REQUEST_EMPLOYEES
});

export const receiveEmployees = (json) => ({
    type: RECEIVE_EMPLOYEES,
    employees: json,
    receivedAt: Date.now()
});

export const fetchEmployees = () => (dispatch) => {
    dispatch(requestEmployees());
    return fetch(`http://localhost:3005/employee`)
        .then(
            response => response.json(),
            error => console.log("Something went wrong", error)
        )
        .then(json => dispatch(receiveEmployees(json)))
};
