import React from "react";
import { connect } from 'react-redux'
import selectExpensesTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";
import {NavLink} from "react-router-dom";
import Heading from "./Heading";

numeral.locale('en-gb');

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className="expenses-summary">
            <Heading
                title={<span>Viewing <strong>{expenseCount}</strong> {expenseWord} totalling <strong>{formattedExpensesTotal}</strong></span>}
                summary={<NavLink className="btn primary-btn" to="/create">Add Expense</NavLink>}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expenseCount: visibleExpenses.length
    }
};

export default connect(mapStateToProps)(ExpensesSummary);
