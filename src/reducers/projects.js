function projects(state = {}, action) {
    switch (action.type) {
        case 'LOAD_OVERVIEW_DATA':
            return {
                ...state,
                isFetching: true
            };
        case 'LOAD_OVERVIEW_DATA_SUCCESS':
            return {
                ...state,
                isFetching: false,
                doneLoading: true,
                projects: action.payload.objects
            };
        default:
            return state;
    }
}

export default projects;