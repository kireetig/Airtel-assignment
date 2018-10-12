import * as apiUtils from '../utils/ApiUtils';
import {ADD_CART_ITEM, GET_BURGERS, UPDATE_PRODUCTS} from "../constants/ActionTypes";

export const test = () => (dispatch) => {
    console.log('test');
};

export const getAllBurger = () => async (dispatch) => {
    const response = await apiUtils.getBurgers();
    dispatch({
        type: GET_BURGERS,
        payload: response.data,
    });
};

export const addToCart = (item, quantity) => (dispatch) => {
    const myItem = {
        ...item,
        quantity,
    };
    dispatch({
        type: ADD_CART_ITEM,
        payload: myItem
    });
};


export const filterProducts = (rating, category, price, searchText, items) => (dispatch) => {
    const filteredItems = [];
    items.forEach((item) => {
        if ((item.rating >= rating) && (item.category.toLowerCase() === category || category === '') && (item.title.toLowerCase().includes(searchText) || item.ingredients.toLowerCase().includes(searchText)) &&
            (item.price <= parseInt(price, 10))) {
            filteredItems.push(item);
        }
    });

    dispatch({
        type: UPDATE_PRODUCTS,
        payload: filteredItems
    });
};