function overview(state = [], action) {
    switch (action.type) {
        case 'LOAD_OVERVIEW_DATA_SUCCESS':
            return [
                ...state,
                action.payload.body
            ];
        default:
            return state;
    }
}


export default overview;