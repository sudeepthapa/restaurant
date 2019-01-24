import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/"> Navbar </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/restaurant">Restaurant</Link>>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/restaurant">Items</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default NavBar;
