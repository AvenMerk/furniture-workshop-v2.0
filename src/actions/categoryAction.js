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
    return fetch(`http://178.62.13.249:3130/api/category/list`)
        .then(
            response => response.json(),
            error => console.log("Something went wrong", error)
        )
        .then(json => dispatch(receiveCategory(json)))
};

