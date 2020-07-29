import React, { useState } from "react";
import BudgetEntryItem from "./BudgetEntryItem";

const BudgetEntryList = (props) => {

    const [ searchQuery, setSearchQuery ] = useState("");
    
    const { entries } = props;

    const handleSearchQueryChange = (e) => {
        // console.log(e.target.value)
        setSearchQuery(e.target.value);
    }

    const handleSearch = () => {
        
        if (!searchQuery) {
            return;
        }

        const filtered = entries.filter(entry => entry.entry_date === searchQuery)

        console.log(filtered)
    }

    return (
        <>
            <div className="d-block py-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter any search query ..."
                    onChange={handleSearchQueryChange}
                />
                <button className="btn btn-secondary mt-3" onClick={handleSearch}>Search</button>
            </div>
            {entries.map(entry => (<BudgetEntryItem entry={entry} />))}
        </>
    );

}

export default BudgetEntryList;