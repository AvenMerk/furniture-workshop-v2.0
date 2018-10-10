import React from 'react'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap'
import {connect} from 'react-redux'
import PurchaseItem from '../components/PurchaseItem'
import {createCart} from '../actions/cartAction'

class Cart extends React.Component {
    state = {
        items: JSON.parse(localStorage.getItem('cart')),
        description: 'Add your description'
    };

    getCartForRender = () => {
        if (this.state.items) {
            return <React.Fragment>
                {Object.entries(this.state.items).map(([productId, product], index) =>
                    <PurchaseItem productId={productId} key={index}
                                  quantity={product.quantity}
                                  price={(product.price * product.quantity).toFixed(2)}
                                  name={product.name}
                                  onChange={(event) => this.changeQuantity(productId, event)}
                                  onClick={() => this.deleteItemFromCart(productId)}
                    />
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

    postCart = () => {
        const totalPrice = this.getTotalPrice();
        const purchases = Object.entries(this.state.items)
            .map(([productId, {quantity}]) => ({productId, quantity}));

        const {firstName, lastName, middleName, email, phone, shippingAddress, description} = this.state;
        const cart = {firstName, lastName, middleName, email, phone, shippingAddress, purchases, price: totalPrice, description};
        this.props.dispatch(createCart(JSON.stringify(cart)));
    };

    render() {
        return <div className='page-container1'>
            <h2>Your Cart</h2>

            <table>
                <thead>
                <tr>
                    <th className='table-left-align'>Product</th>
                    <th colSpan='2'>Amount</th>
                    <th>Price</th>
                </tr>
                </thead>

                <tbody>
                {this.getCartForRender()}
                </tbody>
                <tfoot>
                <tr>
                    <th colSpan='3' className='table-left-align'>Total Price:</th>
                    <th>{this.getTotalPrice()}</th>
                </tr>
                </tfoot>
            </table>

            <div className='cart__style'>
                <Button id="toggler"
                        className='standart__button add-cart-button'>
                    Buy
                </Button>
            </div>

            {this.popupData()}
        </div>
    }

    popupData = () => {
        return <React.Fragment>
            <div>
                <UncontrolledCollapse toggler="#toggler">
                    <Card>
                        <CardBody>
                            <p>We need more information about you.</p>
                            <p>Please, enter your:</p>

                            <div className="text">
                                <p>First name: </p>
                                <input type='text'
                                       placeholder={"Enter First Name"}
                                       value={this.state.firstName}
                                       onChange={this.enterFirstName}
                                       required/>

                                <p>Last name: </p>
                                <input type='text'
                                       placeholder={"Enter Last Name"}
                                       value={this.state.lastName}
                                       onChange={this.enterLastName}
                                       required/>

                                <p>Middle name: </p>
                                <input type='text'
                                       placeholder={"Enter Middle Name"}
                                       value={this.state.middleName}
                                       onChange={this.enterMiddleName}
                                       required/>

                                <p>Email: </p>
                                <input type='email'
                                       placeholder={"Enter your email"}
                                       value={this.state.email}
                                       onChange={this.enterEmail}
                                       required/>

                                <p>Phone number: </p>
                                <input type='tel'
                                       placeholder={"Enter your phone number"}
                                       value={this.state.phone}
                                       onChange={this.enterPhone}
                                       required/>

                                <p>Shipping address: </p>
                                <input placeholder={"Enter your shipping address"}
                                       value={this.state.shippingAddress}
                                       onChange={this.enterAddress}
                                       required/>

                                <p>Description: </p>
                                <textarea rows='3'
                                          cols='33'
                                          maxLength={"200"}
                                          wrap={"hard"}
                                          defaultValue={this.state.description}
                                          onChange={this.enterDescription}
                                />

                                <button className='standart__button'
                                        onClick={this.postCart}>
                                    click
                                </button>
                                <button id="toggler"
                                        className='standart__button'>
                                    close
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        </React.Fragment>
    }
}

export default connect()(Cart)

