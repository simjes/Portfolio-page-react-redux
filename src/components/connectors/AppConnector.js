import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import App from '../../App';

function mapStateToProps(state) {
    return {
        overview: state.overview,
        //connect disease info to props
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const AppConnector = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppConnector;