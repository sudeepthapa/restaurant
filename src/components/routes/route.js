import {Route , Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Restaurant from '../pages/Restaurant/Restaurant';
import AddRestaurant from '../pages/Restaurant/AddRestaurant';
import React, { Component } from 'react';

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/restaurant' component={Restaurant} />
                    <Route path='/restaurant/create' exact component={AddRestaurant} />
                </Switch>
            </div>
        );
    }
}

export default Router;
