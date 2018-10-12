import React from 'react';


class Navbar extends React.Component {
    render(){
        return(<div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a className="navbar-brand" href="#">Bugger Awesome</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>)
    }
}

export default Navbar;