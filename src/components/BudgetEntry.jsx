import React from "react";

const BudgetEntry = (props) => {

    const { entryId, entries } = props;

    const entry = entries.find(ent => ent.id == entryId)
    
    return (
        <div className="container">
            <div className="mt-3">
                {JSON.stringify(entry)}
            </div>
        </div>
    )
};

export default BudgetEntry;