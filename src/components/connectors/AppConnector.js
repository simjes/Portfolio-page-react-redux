import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import App from '../../App';

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const AppConnector = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppConnector;