function overview(state = [], action) {
    switch (action.type) {
        case 'LOAD_OVERVIEW_DATA':
            return [
                ...state,
                {
                    "outbreakId": 7,
                    "PHE": "Ebola",
                    "status": "ALERT",
                    "location": "newest district",
                    "date": "11.03.16"
                }
            ];
        default:
            return state;
    }
}


export default overview;