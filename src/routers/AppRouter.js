import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
// import Employees from '../components/Employees';
// import AboutPage from '../components/AboutPage';
import CategoryGet from '../containers/CategoryGet'
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                {/*<Route path="/employees" component={Employees} />*/}
                {/*<Route path="/about" component={AboutPage} />*/}
                {/*<Route path="/categories" component={Categories} />*/}
                <Route component={NotFoundPage} />
            </Switch>
            <CategoryGet />
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;