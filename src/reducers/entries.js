import { ENTRIES_HAS_ERRORED, ENTRIES_IS_LOADING, ENTRIES_LOAD_DATA_SUCCESS } from "../constants";

export function entriesHasErrored(state=false, action) {
    switch (action.type) {
        case ENTRIES_HAS_ERRORED:
            return action.hasErrored;
    
        default:
            return state;
    }
}

export function entriesIsLoading(state=false, action) {
    switch (action.type) {
        case ENTRIES_IS_LOADING:
            return action.isLoading
    
        default:
            return state;
    }
}

export function entries(state = [], action) {
    switch (action.type) {
        case ENTRIES_LOAD_DATA_SUCCESS:
            return action.entries
    
        default:
            return state;
    }
}