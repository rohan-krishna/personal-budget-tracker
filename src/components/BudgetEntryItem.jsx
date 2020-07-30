import React from "react";
import { Link } from "@reach/router";
import moment from "moment";

const BudgetEntryItem = (props) => {

    const { entry } = props;

    return (
        <div className="mb-3">
            <div className="card-body p-0">
                <div className="d-flex justify-content-between">
                    <span className="border border-right flex-grow-1 rounded-left p-3">
                        <h3 className="">{moment.unix(entry.entry_date.seconds).format("dddd, MMMM Do YYYY")}</h3>
                        <Link to={`entries/${entry.id}`}>View</Link>
                    </span>
                    <span className="border rounded-right">
                        <p className="m-0 border-bottom p-3 h3">₹ {entry.total_income}</p>
                        <p className="m-0 p-3 h3">₹ {entry.total_expenses}</p>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default BudgetEntryItem;