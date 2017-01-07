function projects(state = [], action) {
    switch (action.type) {
        case 'LOAD_OVERVIEW_DATA_SUCCESS':
            return action.payload.objects;
        default:
            return state;
    }
}

export default projects;