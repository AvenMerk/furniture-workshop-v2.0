import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AboutPage from '../containers/AboutPage';
import NotFoundPage from '../containers/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsListPage from '../containers/ProductsListPage';
import ProductPage from '../containers/ProductPage';
import HomePage from '../containers/HomePage';
import CartList from '../containers/Cart'

const AppRouter = () => (
    <BrowserRouter>
        <React.Fragment>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/products" component={ProductsListPage}/>
                <Route path="/product/:id" component={ProductPage}/>
                <Route path="/cart" component={CartList}/>
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer/>
        </React.Fragment>
    </BrowserRouter>
);

export default AppRouter;