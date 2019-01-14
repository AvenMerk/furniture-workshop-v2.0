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
            <div className="workshop-container-full">
                <Header/>
                <Switch>
                    <Route path="postershop/" component={HomePage} exact={true}/>
                    <Route path="postershop/about" component={AboutPage}/>
                    <Route path="postershop/products" component={ProductsListPage}/>
                    <Route path="postershop/product/:id" component={ProductPage}/>
                    <Route path="postershop/cart" component={CartList}/>
                    <Route component={NotFoundPage}/>
                </Switch>
                <Footer/>
            </div>
        </React.Fragment>
    </BrowserRouter>
);

export default AppRouter;