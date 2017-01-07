import {push} from 'react-router-redux';

//testing: load programs to find idsr/outbreak data
export function loadOverviewData() {
    return {
        type: 'LOAD_OVERVIEW_DATA',
        overview: "some new data"
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