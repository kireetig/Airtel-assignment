import React from 'react';
import {CART, INDEX_PATH} from "../constants/RouterConstants";


class Navbar extends React.Component {
    render(){
        return(<div>
            <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark">
                <a className="navbar-brand pointer" style={{color: 'white'}} onClick={() => {
                    const route = {
                        path: INDEX_PATH,
                        keys: {},
                        options: {},
                    };
                    this.props.navigateTo(route);
                }}>Bugger Awesome</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link mr-4 pointer" onClick={() => {
                                const route = {
                                    path: CART,
                                    keys: {},
                                    options: {},
                                };
                                this.props.navigateTo(route);
                            }}>View Cart <span>{this.props.count}</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>)
    }
}

export default Navbar;