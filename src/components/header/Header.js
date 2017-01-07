import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';

class Header extends Component {
    render() {
        return (
            <AppBar showMenuIconButton={false}>
                <Link to="/">
                    <h1>Portfolio page</h1>
                </Link>
            </AppBar>
        );
    }
}

export default Header;