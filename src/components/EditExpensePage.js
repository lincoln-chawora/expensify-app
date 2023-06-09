import React from "react";
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {startAddExpense, startRemoveExpense, startEditExpense} from "../actions/expenses";
import Heading from "./Heading";

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        if (this.props.expense) {
            const expenseId = this.props.expense.id;
            this.props.startEditExpense(expenseId, expense)
        } else {
            this.props.startAddExpense(expense);
        }

        // Redirect to dashboard on from submit. (prop.history comes from react router)
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <Heading title="Edit Expense" />
                <div className="container">

                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />

                    <button className="btn secondary-btn" onClick={this.onRemove}>Delete Expense</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        // State has all expenses, we find the expense that matches the url id from props.
        // Props in this context comes from react-router-dom which has access to url / page info.
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startAddExpense: (expense) => dispatch(startAddExpense(expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);