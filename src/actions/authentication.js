import { ADD_AUTHENTICATION_DATA, GET_USER_DATA, GET_FIREBASE_DATA } from "../constants";

export function addAuthenticationData(authentication_data) {
    return {
        type: ADD_AUTHENTICATION_DATA,
        authentication_data
    }
}

export function getUserData() {
    return {
        type: GET_USER_DATA,
    }
}

export function getFirebaseData() {
    return {
        type: GET_FIREBASE_DATA
    }
}