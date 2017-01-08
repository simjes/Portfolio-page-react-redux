import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Header from './components/header/Header';
import Jumbotron from './components/jumbo/Jumbotron';
import Footer from './components/footer/Footer';


class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
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