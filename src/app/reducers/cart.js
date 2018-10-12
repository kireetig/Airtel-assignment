import {UPDATE_CART} from "../constants/ActionTypes";

const initialState = {
    items: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_CART:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}