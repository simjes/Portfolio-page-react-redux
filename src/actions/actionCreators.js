export function getAllProjects() {
    return function(dispatch, getState, api) {
        dispatch({ type: 'LOAD_OVERVIEW_DATA' });
        fetch(api)
            .then( response => response.json())
            .then(json => dispatch({ type: 'LOAD_OVERVIEW_DATA_SUCCESS', payload: json }))
            .catch(result => dispatch({ type: 'LOAD_OVERVIEW_DATA_FAIL' }))
    }
}
