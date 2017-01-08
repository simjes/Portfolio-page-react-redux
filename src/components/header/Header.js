import React, {Component} from 'react';
import {Link} from 'react-router';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/" id="header-link">
                    <h1 className="testing">SIMJES PORTFOLIO</h1>
                </Link>
            </div>
        );
    }
}

export default Header;