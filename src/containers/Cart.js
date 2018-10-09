import React from 'react'
import {connect} from 'react-redux'
import PurchaseItem from '../components/PurchaseItem'
import {createCart} from '../actions/cartAction'

class Cart extends React.Component {
    state = {
        items: JSON.parse(localStorage.getItem('cart')),
        firstName: "First Name",
        lastName: "Last Name",
        middleName: "Middle Name",
        email: "test@test.ru",
        phone: "111111",
        shippingAddress: "Your shipping address",
        price: 0,
        description: "Add your description"
    };

    getCartForRender = () => {
        const cartItems = this.state.items;
        if (cartItems) {
            return <React.Fragment>
                {Object.entries(cartItems).map(([productId, product], index) =>
                    <tbody key={index}>
                        <PurchaseItem productId={productId}
                                      quantity={product.quantity}
                                      price={(product.price*product.quantity).toFixed(2)}
                                      name={product.name}
                                      onChange={(event) => this.changeQuantity(productId, event)}
                                      onClick={() => this.deleteItemFromCart(productId)}

                        />
                    </tbody>
                )}
            </React.Fragment>
        } else {
            return <h1>EMPTY</h1>
        }
    };

    clearAllOnClick = () => {
        this.setState({items: null});
        localStorage.clear();
    };

    deleteItemFromCart = (productId) => {
        let newItems = {...this.state.items};
        delete newItems[productId];
        this.setState({items: newItems});
        localStorage.setItem('cart', JSON.stringify(newItems));
    };

    changeQuantity = (productId, event) => {
        let newItems = {...this.state.items};
        newItems[productId].quantity = Number(event.target.value);
        this.setState({items: newItems});
        localStorage.setItem('cart', JSON.stringify(newItems));
    };

    setTotalPrice = (totalPrice) => {
        this.setState({price: totalPrice.toFixed(2)});
    };

    enterFirstName = (e) => {
        e.preventDefault();
        let newFirstName = e.target.value;
        this.setState({firstName: newFirstName});
    };

    enterLastName = (e) => {
        e.preventDefault();
        let newLastName = e.target.value;
        this.setState({lastName: newLastName});
    };

    enterMiddleName = (e) => {
        e.preventDefault();
        let newMiddleName = e.target.value;
        this.setState({middleName: newMiddleName});
    };

    enterEmail = (e) => {
        e.preventDefault();
        let newEmail = e.target.value;
        this.setState({email: newEmail});
    };

    enterPhone = (e) => {
        e.preventDefault();
        let newPhone = e.target.value;
        this.setState({phone: newPhone});
    };

    enterAddress = (e) => {
        e.preventDefault();
        let newShippingAddress = e.target.value;
        this.setState({shippingAddress: newShippingAddress});
    };

    enterDescription = (e) => {
        e.preventDefault();
        let newDescription = e.target.value;
        this.setState({description: newDescription});
    };

    showSmth = (e) => {
        e.preventDefault();
        console.log(this.state.firstName,
            this.state.lastName,
            this.state.middleName,
            this.state.phone,
            this.state.shippingAddress,
            this.state.email,
            this.state.description);
    };

    popupFunction = (e) => {
        e.preventDefault();
        let popup = document.getElementById("myPopup");
        console.log(popup);
        popup.classList.toggle("show");
    };

    postCart = () => {
        let totalPrice =  Object.entries(this.state.items).map(([productId, product]) => (product.quantity * product.price)).reduce((acc, value) => acc + value, 0);
        let purchases = Object.entries(this.state.items)
            .map(([productId, {quantity}]) => ({productId, quantity}));
        let cart = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            middleName: this.state.middleName,
            email: this.state.email,
            phone: this.state.phone,
            shippingAddress: this.state.shippingAddress,
            purchases,
            price: totalPrice,
            description: this.state.description
        };

        this.props.dispatch(createCart(JSON.stringify(cart)));
    };

    render() {
        let totalPrice =  Object.entries(this.state.items).map(([productId, product]) => (product.quantity * product.price)).reduce((acc, value) => acc + value, 0);
        return <div className="page-container">
            <h2>Your Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th className="table-left-align">Product</th>
                        <th colSpan="2">Amount</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {this.getCartForRender()}
                <tfoot>
                    <tr>
                        <th colSpan="3"  className="table-left-align">Total Price:</th>
                        <th>{totalPrice.toFixed(2)}</th>
                    </tr>
                </tfoot>
            </table>
            <div className="cart__style">
                {/*<button*/}
                    {/*className="standart__button"*/}
                    {/*onClick={this.clearAllOnClick}>*/}
                    {/*Clear All*/}
                {/*</button>*/}
                <button
                    className="standart__button add-cart-button"
                    onClick={this.popupFunction}>
                    Buy
                </button>
            </div>
            <div className="popup">
                <div className="popuptext" id="myPopup">
                    <p>First name: </p>
                    <input type="text"
                           placeholder={this.state.firstName}
                           onChange={this.enterFirstName}
                           required/>
                    <p>Last name: </p>
                    <input type="text"
                           placeholder={this.state.lastName}
                           onChange={this.enterLastName}
                           required/>
                    <p>Middle name: </p>
                    <input type="text"
                           placeholder={this.state.middleName}
                           onChange={this.enterMiddleName}
                           required/>
                    <p>Email: </p>
                    <input type="email"
                           placeholder={this.state.email}
                           onChange={this.enterEmail}
                           required/>
                    <p>Phone number: </p>
                    <input type="tel"
                           placeholder={this.state.phone}
                           onChange={this.enterPhone}
                           required/>
                    <p>Shipping address: </p>
                    <input placeholder={this.state.shippingAddress}
                           onChange={this.enterAddress}
                           required/>
                    <p>Description: </p>
                    <textarea rows="4"
                              cols="50"
                              defaultValue={this.state.description}
                              onChange={this.enterDescription}
                    />
                    <button onClick={this.postCart}>click</button>
                </div>
            </div>
        </div>
    }
}

export default connect()(Cart)

