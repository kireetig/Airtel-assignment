import * as apiUtils from '../utils/ApiUtils';
import {GET_BURGERS} from "../constants/ActionTypes";

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