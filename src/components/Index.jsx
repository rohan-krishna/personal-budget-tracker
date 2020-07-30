import React, { useEffect } from "react";
import BudgetEntryList from "./BudgetEntryList";
import { connect } from "react-redux";
import { entriesFetchData } from "../actions";
import { addAuthenticationData } from "../actions/authentication";
const Index  = (props) => {

    const { firebase, user } = props;

    useEffect( () => {
        // call dispatch function to store user and firebase in our store.
        props.addAuthData({ "user" : props.user, "firebase" : props.firebase })
        // call dispatch function to fetch the entries based on user_id
        props.fetchData({"user" : props.user, "firebase": props.firebase});

    }, [])

    return (
        <div className="container mt-3">
            <h4 className="bp3-heading">Hello World!</h4>
            <p>Welcome, {user.displayName}</p>
            <button class="btn btn-danger" onClick={() => firebase.auth().signOut()}>Sign-Out</button>
            <BudgetEntryList entries={props.entries} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        entries: state.entries,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        reduxUser: state.authenticationData.user,
        reduxFirebase: state.authenticationData.firebase
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (credentials) => dispatch(entriesFetchData(credentials)),
        addAuthData: (authentication_data) => dispatch(addAuthenticationData(authentication_data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);