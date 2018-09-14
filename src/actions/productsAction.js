export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const REQUEST_PRODUCT = 'REQUEST_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const requestProducts = () => ({
    type: REQUEST_PRODUCTS
});

export const requestProduct = () => ({
    type: REQUEST_PRODUCT
});

export const receiveProducts = (json) => ({
    type: RECEIVE_PRODUCTS,
    products: json,
    receivedAt: Date.now()
});

export const receiveProduct = (json) => ({
    type: RECEIVE_PRODUCT,
    product: json,
    receivedAt: Date.now()
});

export const fetchProducts = () => (dispatch) => {
    dispatch(requestProducts());
    return fetch(`http://139.59.141.108:3130/api/product/list`)
        .then(
            response => response.json(),
            error => console.log("Something went wrong", error)
        )
        .then(json => dispatch(receiveProducts(json)))
};

export const fetchProduct = (id) => (dispatch) => {
    dispatch(requestProduct());
    return fetch(`http://139.59.141.108:3130/api/product/${id}`)
        .then(
            response => response.json(),
            error => console.log("Something went wrong", error)
        )
        .then(json => dispatch(receiveProduct(json)))
};
