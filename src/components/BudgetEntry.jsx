import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { entriesFetchData } from "../actions";

const BudgetEntry = (props) => {

    const { entryId } = props;

    const [ entry, setEntry ] = useState("");

    const [ incomeEntries, setIncomeEntries ] = useState([]);

    useEffect( () => { 
        setEntry(props.entries.find(ent => ent.id == entryId));

        props.firebase.firestore().collection("budget_entries").doc(entryId).collection("income_entries").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setIncomeEntries([ ...incomeEntries, doc.data() ])
            })
        })

    }, [props.entries])

    
    return (
        <div className="container">
            <div className="mt-3">
                {JSON.stringify(entry)}
                {JSON.stringify(incomeEntries)}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        "entries" : state.entries,
        "user" : state.authenticationData.user,
        "firebase" : state.authenticationData.firebase
    }
};


export default connect(mapStateToProps, null)(BudgetEntry);