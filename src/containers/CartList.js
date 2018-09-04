import React from 'react'
import {connect} from 'react-redux'
import Cart from '../components/Cart'

function getCartItemsList() {
    const cartItemsList = JSON.parse(localStorage.getItem('cart'));
    return cartItemsList === null ? [] : cartItemsList
}

class CartList extends React.Component {
    state = {
        cart: getCartItemsList(),
    };

    getCartForRender = () => this.state.cart && this.state.cart.length > 0
        ? <Cart cart={this.state.cart}/>
        : <h1>EMPTY</h1>;

    render() {
        return <React.Fragment>
            {this.getCartForRender()}
        </React.Fragment>
    }
}

export default connect()(CartList)

