import {GET_BURGERS} from "../constants/ActionTypes";


const initialState = {
    allProducts: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BURGERS:
            return {
                ...state,
                allProducts: action.payload
            };
        default:
            return state;
    }
}