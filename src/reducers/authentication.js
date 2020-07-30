import { ADD_AUTHENTICATION_DATA, GET_USER_DATA, GET_FIREBASE_DATA } from "../constants";

export function authenticationData(state = {}, action) {
    switch (action.type) {
        case ADD_AUTHENTICATION_DATA:
            return action.authentication_data;
    
        default:
            return state;
    }
}

export function getUserData(state = {}, action) {
    switch (action.type) {
        case GET_USER_DATA:
            return state.authentication_data ? state.authentication_data.user : state;
    
        default:
            return state;
    }
}

export function getFirebaseData(state = {}, action) {
    switch (action.type) {
        case GET_FIREBASE_DATA:
            return state.authentication_data ? state.authentication_data.firebase : state;
    
        default:
            return state;
    }
}