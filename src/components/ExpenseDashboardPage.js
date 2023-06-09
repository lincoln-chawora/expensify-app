import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <div className="container">
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    </div>
)

export default ExpenseDashboardPage