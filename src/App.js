import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import {redA700} from 'material-ui/styles/colors';

class App extends Component {
    render() {
        let customDarkTheme = darkBaseTheme;
        customDarkTheme.palette.primary1Color = redA700;

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(customDarkTheme)}>
                <div>
                    <Header />
                    {React.cloneElement(this.props.children, this.props)}
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;