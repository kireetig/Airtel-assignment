import React from 'react';
import { connect } from 'react-redux';
import HomeContainer from './HomeContainer';
import Root from '../components/Root';
import { initRouter, navigateTo } from '../actions/RouterActions';
import {CART, INDEX_PATH, ORDER_PLACED} from "../constants/RouterConstants";
import CartContainer from "./CartContainer";
import OrderPlacedComponent from "../components/OrderPlaced";


const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
    const { router } = state;

    return {
        paths: [INDEX_PATH, CART, ORDER_PLACED],
        router,
        routes: {
            [INDEX_PATH]: HomeContainer,
            [CART]: CartContainer,
            [ORDER_PLACED]: OrderPlacedComponent
        },
    };
};

export default connect(mapStateToProps, {
    initRouter,
    navigateTo,
})(RootContainer);
