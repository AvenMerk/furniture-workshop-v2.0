export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const requestProducts = () => ({
    type: REQUEST_PRODUCTS
});

export const receiveProducts = (json) => ({
    type: RECEIVE_PRODUCTS,
    products: json,
    receivedAt: Date.now()
});

export const fetchProducts = () => (dispatch) => {
    dispatch(requestProducts());
    return fetch(`http://furniture-service.herokuapp.com/product`)
        .then(
            response => response.json(),
            error => console.log("Something went wrong", error)
        )
        .then(json => dispatch(receiveProducts(json)))
};
