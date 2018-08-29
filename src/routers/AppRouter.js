import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import EmployeesPage from '../components/EmployeesPage';
import AboutPage from '../components/AboutUsPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsPage from '../components/ProductsPage';

const AppRouter = () => (
    <BrowserRouter>
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/employees" component={EmployeesPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/products" component={ProductsPage} />
                {/*<Route path="/categories" component={Categories} />*/}
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </React.Fragment>
    </BrowserRouter>
);

export default AppRouter;