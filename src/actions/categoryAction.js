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
    return fetch(`https://workshop.fedor-bystrov.me/api/category/list`)
        .then(
            response => response.json(),
            error => console.log("Something went wrong", error)
        )
        .then(json => dispatch(receiveCategory(json)))
};

