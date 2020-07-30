import React, { useState, createContext, useEffect } from "react";
import moment from "moment";

export const BudgetEntryContext = createContext();

export const BudgetEntryProvider = props => {
    
    const [ entries, setEntries ] = useState([]);

    useEffect( () => {
        let entriesArray = [];
        for (let i = 0; i <= 10; i++) {
            const entry = { "id" : i+1, "entry_date" : moment().add(1, "day").format(), "total_income" : 30000, "total_expenses" : 25000 };
            entriesArray.push(entry);
        }
        setEntries(entriesArray);
    }, []);


    return (
        <BudgetEntryContext.Provider value={[entries, setEntries]}>
            {props.children}
        </BudgetEntryContext.Provider>
    );
}