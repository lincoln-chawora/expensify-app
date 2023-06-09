import React from "react";
import { connect } from 'react-redux'
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses"

export const ExpenseList = (props) => (
    <div className="expenses-list">
        <div className="expenses-list--header">
            <div>Expense</div>
            <div>Amount</div>
        </div>
        <div className="expenses-list--content">
            {
                props.expenses.length === 0 ? (
                    <p className="empty">No expenses</p>
                ) : (
                    props.expenses.map((expense, index) => (
                        <ExpenseListItem key={expense.id} {...expense}/>
                    ))
                )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);
