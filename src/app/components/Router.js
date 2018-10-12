import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    router: PropTypes.shape({
        route: PropTypes.shape({
            path: PropTypes.string,
        }),
    }).isRequired,
    routes: PropTypes.shape({}).isRequired,
    navigateTo: PropTypes.func.isRequired,
};


const Router = ({ router, routes, navigateTo }) => {
    const { path } = router.route;
    if (path in routes) {
        const Component = routes[path];
        return (
            <Component navigateTo={navigateTo} /* Don't remove */ />);
    }

    return null;
};

Router.propTypes = propTypes;
// PropTypes.checkPropTypes(propTypes, props, 'prop', 'Router');

export default Router;
