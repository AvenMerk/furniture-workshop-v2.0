import React from 'react'
import {connect} from 'react-redux'
import PurchaseItem from '../components/PurchaseItem'
import {createCart} from '../actions/cartAction'

class Cart extends React.Component {
    state = {
        items: JSON.parse(localStorage.getItem('cart')),
        lastName: 'Last Name',
        middleName: 'Middle Name',
        email: 'test@test.ru',
        phone: '111111',
        shippingAddress: 'Your shipping address',
        description: 'Add your description'
    };

    getCartForRender = () => {
        if (this.state.items) {
            return <React.Fragment>
                {Object.entries(this.state.items).map(([productId, product], index) =>
                    <tbody key={index}>
                    <PurchaseItem productId={productId}
                                  quantity={product.quantity}
                                  price={(product.price * product.quantity).toFixed(2)}
                                  name={product.name}
                                  onChange={(event) => this.changeQuantity(productId, event)}
                                  onClick={() => this.deleteItemFromCart(productId)}
                    />
                    </tbody>
                )}
            </React.Fragment>
        }

        return <h1>EMPTY</h1>
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

    getTotalPrice = () => {
        return Object.entries(this.state.items)
            .map(([productId, product]) => (product.quantity * product.price))
            .reduce((acc, value) => acc + value, 0)
            .toFixed(2);
    };

    enterFirstName = (event) => this.setState({firstName: event.target.value});

    enterLastName = (event) => this.setState({lastName: event.target.value});

    enterMiddleName = (event) => this.setState({middleName: event.target.value});

    enterEmail = (event) => this.setState({email: event.target.value});

    enterPhone = (event) => this.setState({phone: event.target.value});

    enterAddress = (event) => this.setState({shippingAddress: event.target.value});

    enterDescription = (event) => this.setState({description: event.target.value});

    showPopup = () => {
        const popup = document.getElementById('myPopup');
        const overlay = document.getElementById('overlay');
        popup.classList.toggle('show');
        overlay.style.display = 'block';
        popup.style.display = 'block';
    };

    closePopup = () => {
        let popup = document.getElementById('myPopup');
        let overlay = document.getElementById('overlay');
        popup.classList.toggle('show');
        overlay.style.display = 'none';
        popup.style.display = 'none';
    };

    postCart = () => {
        const totalPrice = this.getTotalPrice();
        const purchases = Object.entries(this.state.items)
            .map(([productId, {quantity}]) => ({productId, quantity}));

        const cart = {
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
        this.closePopup();
    };

    render() {
        let totalPrice = this.getTotalPrice();

        return <div className='page-container'>
            <h2>Your Cart</h2>

            <table>
                <thead>
                <tr>
                    <th className='table-left-align'>Product</th>
                    <th colSpan='2'>Amount</th>
                    <th>Price</th>
                </tr>
                </thead>

                {this.getCartForRender()}

                <tfoot>
                <tr>
                    <th colSpan='3' className='table-left-align'>Total Price:</th>
                    <th>{totalPrice}</th>
                </tr>
                </tfoot>
            </table>

            <div className='cart__style'>
                <button className='standart__button add-cart-button'
                        onClick={this.showPopup}>
                    Buy
                </button>
            </div>

            {this.popupData()}

        </div>
    }

    popupData = () => {
        return <React.Fragment>
            <div id='overlay'/>

            <div className='popup'>
                <div className='popuptext' id='myPopup'>
                    <p>We need more information about you.</p>
                    <p>Please, enter your:</p>

                    <p>First name: </p>
                    <input type='text'
                           placeholder={"Enter First Name"}
                           value={this.state.firstName}
                           onChange={this.enterFirstName}
                           required/>

                    <p>Last name: </p>
                    <input type='text'
                           placeholder={this.state.lastName}
                           onChange={this.enterLastName}
                           required/>

                    <p>Middle name: </p>
                    <input type='text'
                           placeholder={this.state.middleName}
                           onChange={this.enterMiddleName}
                           required/>

                    <p>Email: </p>
                    <input type='email'
                           placeholder={this.state.email}
                           onChange={this.enterEmail}
                           required/>

                    <p>Phone number: </p>
                    <input type='tel'
                           placeholder={this.state.phone}
                           onChange={this.enterPhone}
                           required/>

                    <p>Shipping address: </p>
                    <input placeholder={this.state.shippingAddress}
                           onChange={this.enterAddress}
                           required/>

                    <p>Description: </p>
                    <textarea rows='4'
                              cols='50'
                              defaultValue={this.state.description}
                              onChange={this.enterDescription}
                    />

                    <button className='standart__button' onClick={this.postCart}>click</button>
                    <button className='standart__button' onClick={this.closePopup}>close</button>
                </div>
            </div>
        </React.Fragment>
    }
}

export default connect()(Cart)

