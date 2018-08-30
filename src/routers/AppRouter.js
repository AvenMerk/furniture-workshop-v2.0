import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AboutPage from '../containers/AboutPage';
import NotFoundPage from '../containers/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsGet from '../containers/ProductsGet';
import CategoryGet from '../containers/CategoryGet';
import EmployeesGet from '../containers/EmployeesGet';

const AppRouter = () => (
    <BrowserRouter>
        <React.Fragment>
            <Header/>
            <Switch>
                <Route path="/" component={CategoryGet} exact={true}/>
                <Route path="/employees" component={EmployeesGet}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/products" component={ProductsGet}/>
                {/*<Route path="/categories" component={Categories} />*/}
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer/>
        </React.Fragment>
    </BrowserRouter>
);

export default AppRouter;