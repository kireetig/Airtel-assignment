/* global history */
/* global location */
import _ from 'lodash';
import { CHANGE_ROUTE } from '../constants/ActionTypes';
import { compileHash, parseRoute } from '../utils/RouterUtils';

const pushState = (route) => {
    const hash = compileHash(route);
    const prevRoute = window.history
    && window.history.state ? window.history.state.route : {};
    if (!_.isEqual(route, prevRoute) && window.history) {
        window.history.pushState({ route }, '', hash);
    }
};

export const navigateTo = (route, shouldPushState = true) => {
    if (shouldPushState) {
        pushState(route);
    }
    return {
        type: CHANGE_ROUTE,
        route,
    };
};

export const navigateBack = e => (dispatch) => {
    const { state } = e;
    if (state) {
        const { route } = state;
        dispatch(navigateTo(route, false));
    }
};

export const initRouter = paths => (dispatch) => {
    window.onpopstate = (e) => {
        dispatch(navigateBack(e));
    };

    const pathname = window.location ? window.location.pathname + window.location.search : '/';
    const route = parseRoute(pathname.replace(/%2C/g, ','), paths);
    return dispatch(navigateTo(route));
};
