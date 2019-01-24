import React, { Component } from 'react';
import RestaurantForm from './Restaurant';
import {connect } from 'react-redux';

class AddRestaurant extends Component {
    render() {
        console.log(props.res);
        return (
            <div>
                
                <h2>Add Restaurant</h2>
                <RestaurantForm />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        res: state.restaurant
    }
}

export default connect(mapStateToProps)(AddRestaurant);


