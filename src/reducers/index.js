import { combineReducers } from "redux";
import { entries, entriesHasErrored, entriesIsLoading } from "./entries";
import { authenticationData, getUserData, getFirebaseData } from "./authentication"

export default combineReducers({
    entries, 
    entriesHasErrored,
    entriesIsLoading,
    authenticationData,
    getUserData,
    getFirebaseData,
});