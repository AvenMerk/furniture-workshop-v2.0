import React from 'react'
import {connect} from 'react-redux'
import Cart from '../components/Cart'

function getCartFromLocalStorage() {
    let myCart = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        myCart[i] = JSON.parse(value);
        console.log(key, value);
    }
    return myCart
}

class CartList extends React.Component {
    state = {
        cart: getCartFromLocalStorage(),
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

