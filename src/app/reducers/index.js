import { combineReducers } from 'redux';
import cart from './cart';
import router from './router';
import main from './main';

export default combineReducers({
    cart,
    main,
    router
});