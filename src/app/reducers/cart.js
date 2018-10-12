import {ADD_CART_ITEM} from "../constants/ActionTypes";

const initialState = {
    items: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CART_ITEM:
            const items = state.items;
            let j = null;
            for(let i=0; i < items.length; i++){
                if(items[i].id === action.payload.id){
                   j = i;
                }
            }
            if(j !== null) {
                items[j].quantity = action.payload.quantity;
            }else{
                items.push(action.payload);
            }
            console.log(items);
            return {
                ...state,
                items
            };
        default:
            return state;
    }
}