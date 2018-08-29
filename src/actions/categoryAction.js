export const REQUEST_CATEGORY = 'REQUEST_CATEGORY';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const requestCategory = () => ({
    type: REQUEST_CATEGORY
});

export const receiveCategory = (json) => ({
    type: RECEIVE_CATEGORY,
    category: json,
    receivedAt: Date.now()
});

export const fetchCategory = () => (dispatch) => {
    dispatch(requestCategory());
    return fetch(`http://localhost:3005/category`)
        .then(
            response => response.json(),
            error => console.log("Something went wrong", error)
        )
        .then(json => dispatch(receiveCategory(json)))
};

