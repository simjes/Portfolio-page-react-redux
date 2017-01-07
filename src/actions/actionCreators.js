import {push} from 'react-router-redux';

//testing: load programs to find idsr/outbreak data
/*export function loadOverviewData() {
    return {
        type: 'LOAD_OVERVIEW_DATA'
    }
}*/

export function getAllProjects() {
    return function(dispatch, getState, api) {
        dispatch({ type: 'LOAD_OVERVIEW_DATA' });
        fetch(api)
            .then(function(res) {
                dispatch({ type: 'LOAD_OVERVIEW_DATA_SUCCESS', payload: res })
            })
            .catch(function(res) {
                dispatch({ type: 'LOAD_OVERVIEW_DATA_FAIL' });
            })
    }
}

//click outbreak -> load data
export function loadOutbreakDetails(outbreakId) {
    return {
        type: 'LOAD_OUTBREAK_DETAILS',
        outbreakId
    }
}

export function navigateToOutbreakDetails(outbreakId) {
    return push(`/view/${outbreakId}`);
}

//load disease data -> check for potential outbreaks