/*
Action Creators
*/
import { LOAD_ENTRIES_SUCCESS, ENTRIES_HAS_ERRORED, ENTRIES_IS_LOADING, ENTRIES_LOAD_DATA_SUCCESS } from "../constants";
import moment from "moment";
import { firebaseConfig } from "../firebase";
import { getFirebaseData, getUserData } from "./authentication";


// Actions
export const entriesHasErrored = (bool) => {
    return {
        type: ENTRIES_HAS_ERRORED,
        hasErrored: bool
    }
}

export const entriesIsLoading = (bool) => {
    return {
        type: ENTRIES_IS_LOADING,
        isLoading: bool
    };
}
export function entriesFetchDataSuccess(entries) {
    return {
        type: ENTRIES_LOAD_DATA_SUCCESS,
        entries
    };
}

// simulate error
export function errorAfterFiveSeconds() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(entriesHasErrored(true))
        }, 5000);
    }
}

export function entriesFetchData(credentials) {

    return (dispatch) => {
        
        dispatch(entriesIsLoading(true));

        // get firebase data from state
        // let firebase = dispatch(getFirebaseData());
        // let user = dispatch(getUserData());

        // console.log("Firebase Redux", firebase)
        // console.log("User Redux", user)
        // let db = firebase.firestore();
        
        let { user, firebase } = credentials;

        let db = firebase.firestore();

        let entriesArray = [];

        // reading firestore data
        db.collection(`budget_entries`)
          .where("uid", "==", `${user.uid}`)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                
                // console.log(doc.id, " => ", doc.data());
                
                
                let entry = {
                    "id" : doc.id, 
                    "entry_date" : doc.data().entry_date, 
                    "total_income": doc.data().total_income, 
                    "total_expenses" : doc.data().total_expenses,
                    "uid" : doc.data().uid,
                }

                entriesArray.push(entry);
            });

            console.log(entriesArray)
            dispatch(entriesFetchDataSuccess(entriesArray));
            dispatch(entriesIsLoading(false));
        });

        
        // for (let i = 0; i <= 10; i++) {
        //     const entry = { "id" : i+1, "entry_date" : moment().add(1, "day").format(), "total_income" : 30000, "total_expenses" : 25000 };
        //     entriesArray.push(entry);
        // }
        

    }
}
