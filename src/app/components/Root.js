import PropTypes from 'prop-types';
import React from 'react';

import Router from './Router';
import Navbar from './Navbar';

const propTypes = {
    initRouter: PropTypes.func.isRequired,
    paths: PropTypes.arrayOf(PropTypes.string).isRequired,
    router: PropTypes.shape({
        keys: PropTypes.shape({}),
        options: PropTypes.shape({}),
        path: PropTypes.string,
    }).isRequired,
    routes: PropTypes.shape({}).isRequired,
    navigateTo: PropTypes.func.isRequired,
};

class Root extends React.Component {
    componentWillMount() {
        const { paths, initRouter } = this.props;
        initRouter(paths);
    }

    render() {
        const { router, routes, navigateTo } = this.props;
        return (
            <div>
                <Navbar />
                <Router router={router} routes={routes} navigateTo={navigateTo} />
            </div>
        );
    }
}

Root.propTypes = propTypes;

export default Root;
