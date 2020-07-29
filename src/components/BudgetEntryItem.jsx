import React from "react";
import { Link } from "@reach/router";

const BudgetEntryItem = (props) => {

    const { entry } = props;

    return (
        <div className="mb-3">
            <div className="card-body p-0">
                <div className="d-flex justify-content-between">
                    <span className="border border-right flex-grow-1 rounded-left p-3">
                        <h3 className="">{entry.entry_date}</h3>
                        <Link to={`entries/${entry.id}`}>View</Link>
                    </span>
                    <span className="border rounded-right">
                        <p className="m-0 border-bottom p-3 h3">Rs.30000</p>
                        <p className="m-0 p-3 h3">Rs.25000</p>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default BudgetEntryItem;