import React from 'react'
import { UncontrolledCollapse, Button, CardBody, Card, Container, Row, Col } from 'reactstrap'
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

    stateCheck = (e) => {
        const {firstName, lastName, middleName, email, phone, shippingAddress} = this.state;
        console.log({firstName, lastName, middleName, email, phone, shippingAddress});
        if (firstName && lastName && middleName && email &&
        phone && shippingAddress !== undefined) {
            e.preventDefault();
            this.postCart();
        }
    };


    render() {
        return <div className='workshop-page-container'>
            <h2>Your Cart</h2>

            <Container>
                <Row>
                    <Col xs="3" className="workshop-cart-col-header">Product</Col>
                    <Col xs="6" className="workshop-cart-col-header">Amount</Col>
                    <Col xs="3" className="workshop-cart-col-header">Price</Col>
                </Row>
                    {this.getCartForRender()}
                    <Row >
                        <Col xs="9" className="workshop-cart-col-footer">Total Price:</Col>
                        <Col xs="3" className="workshop-cart-col-header">{this.getTotalPrice()}</Col>
                    </Row>
            </Container>

            {this.popupData()}

            <div className='cart__style'>
                <Button id="toggler"
                        className='standart__button add-cart-button'>
                    Buy
                </Button>
            </div>
        </div>
    }

    popupData = () => {
        return <React.Fragment>
            <div>
                <UncontrolledCollapse toggler="#toggler" className="workshop-collapse-area">
                    <Card className="workshop-collapse-background">
                        <CardBody className="workshop-collapse-background">
                            <p>We need more information about you.</p>
                            <p>Please, enter your:</p>

                            <Container>

                            <div>
                                <form className="workshop-collapse-text">
                                    <Row className="workshop-registration-form-row">
                                        <Col xs="6">
                                            <label htmlFor="fname">First name: </label>
                                            <input type='text'
                                                   className="workshop-registration-input"
                                                   name="fname"
                                                   placeholder={"Enter First Name"}
                                                   defaultValue={this.state.firstName}
                                                   onChange={this.enterFirstName}
                                                   required/>
                                        </Col>
                                        <Col xs="6">
                                            <label htmlFor="lname">Last name: </label>
                                            <input type='text'
                                                   name="lname"
                                                   className="workshop-registration-input"
                                                   placeholder={"Enter Last Name"}
                                                   defaultValue={this.state.lastName}
                                                   onChange={this.enterLastName}
                                                   required/>
                                        </Col>
                                    </Row>
                                    <Row className="workshop-registration-form-row">
                                        <Col xs="6">
                                            <label htmlFor="mname">Middle name: </label>
                                            <input type='text'
                                                   name="mname"
                                                   className="workshop-registration-input"
                                                   placeholder={"Enter Middle Name"}
                                                   defaultValue={this.state.middleName}
                                                   onChange={this.enterMiddleName}
                                                   required/>
                                        </Col>
                                    </Row>
                                    <Row className="workshop-registration-form-row">
                                        <Col xs="6">
                                            <label htmlFor="email">Email: </label>
                                            <input type='email'
                                                   name="email"
                                                   className="workshop-registration-input"
                                                   placeholder={"Enter your email"}
                                                   defaultValue={this.state.email}
                                                   onChange={this.enterEmail}
                                                   required/>
                                        </Col>
                                        <Col xs="6">
                                            <label htmlFor="phone">Phone number: </label>
                                            <input type='tel'
                                                   name="phone"
                                                   className="workshop-registration-input"
                                                   placeholder={"Enter your phone number"}
                                                   defaultValue={this.state.phone}
                                                   onChange={this.enterPhone}
                                                   required/>
                                        </Col>
                                    </Row>
                                    <Row className="workshop-registration-form-row">
                                        <Col xs="6">
                                            <label htmlFor="address">Shipping address: </label>
                                            <input placeholder={"Enter your shipping address"}
                                                   name="address"
                                                   className="workshop-registration-input"
                                                   defaultValue={this.state.shippingAddress}
                                                   onChange={this.enterAddress}
                                                   required/>
                                        </Col>

                                    </Row>

                                    <Row className="workshop-registration-form-row">
                                        <Col xs="6">
                                            <label htmlFor="description">Description: </label>
                                            <textarea rows='3'
                                                      cols='33'
                                                      maxLength={"200"}
                                                      wrap={"hard"}
                                                      name="description"
                                                      className="workshop-registration-input"
                                                      defaultValue={this.state.description}
                                                      onChange={this.enterDescription}/>
                                        </Col>
                                    </Row>

                                    <div>
                                        <button className='standart__button'
                                                onClick={this.postCart}>
                                            click
                                        </button>
                                        <input type="submit"
                                               value="Submit"
                                               className='standart__button'
                                               onClick={this.stateCheck}/>
                                    </div>
                                </form>
                            </div>
                            </Container>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        </React.Fragment>
    }
}

export default connect()(Cart)

