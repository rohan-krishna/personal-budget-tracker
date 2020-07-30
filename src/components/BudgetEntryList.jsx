import React, { useContext } from "react";
import BudgetEntryItem from "./BudgetEntryItem";


const BudgetEntryList = (props) => {

    return (
        <>
            <div className="d-block py-3">
                {props.entries.map(entry => <BudgetEntryItem entry={entry} />)}
            </div>
        </>
    );

}

export default BudgetEntryList;