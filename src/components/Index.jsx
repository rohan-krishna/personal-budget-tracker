import React from "react";
import BudgetEntryList from "./BudgetEntryList";

const Index  = (props) => {

    const { firebase, user, entries } = props;

    return (
        <div className="container mt-3">
            <h4 className="bp3-heading">Hello World!</h4>
            <p>Welcome, {user.displayName}</p>
            <button onClick={() => firebase.auth().signOut()}>Sign-Out</button>

            <BudgetEntryList entries={entries} />
        </div>
    );
}

export default Index;