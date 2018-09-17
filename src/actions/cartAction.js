export const REQUEST_CART = 'REQUEST_CART';
export const RECEIVE_CART = 'RECEIVE_CART';

export const requestCart = () => ({
    type: REQUEST_CART
});

export const receiveCart = (response) => ({
    type: RECEIVE_CART,
    response: response,
});

export const createCart = (cart) => (dispatch) => {
    dispatch(requestCart());
    return fetch('http://139.59.141.108:3130/api/cart',
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: cart
        })
        .then(response => dispatch(receiveCart(response)),
                error => console.log("Something went wrong", error))
};
