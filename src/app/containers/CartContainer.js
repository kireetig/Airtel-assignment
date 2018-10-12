import React from 'react';
import { connect } from 'react-redux';
import CartComponent from '../components/Cart';


const CartContainer = props => <CartComponent {...props} />;

const mapStateToProps = state => ({
    cartItems: state.cart.items,
});

export default connect(mapStateToProps, {

})(CartContainer);