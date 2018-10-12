import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from '../components/Home';
import {addToCart, getAllBurger, filterProducts} from "../actions/homeActions";


const HomeContainer = props => <HomeComponent {...props} />;

const mapStateToProps = state => ({
    cartItems: state.cart.items,
    allProducts: state.main.allProducts,
    filteredProducts: state.main.filteredProducts
});

export default connect(mapStateToProps, {
    getAllBurger,
    addToCart,
    filterProducts,
})(HomeContainer);
