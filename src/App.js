import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import RootContainer from './app/containers/RootContainer';
import './styles.css';

function App() {
    return (
        <Provider store={store}>
            <RootContainer
            />
        </Provider>);
}

export default App;
