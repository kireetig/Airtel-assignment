import {GET_BURGERS, UPDATE_PRODUCTS} from "../constants/ActionTypes";


const initialState = {
    allProducts: [],
    filteredProducts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BURGERS:
            return {
                ...state,
                allProducts: action.payload,
                filteredProducts: action.payload
            };
        case UPDATE_PRODUCTS:
            return {
                ...state,
                filteredProducts: action.payload
            };
        default:
            return state;
    }
}