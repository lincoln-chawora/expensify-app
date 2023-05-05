import React from "react";
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {addExpense, editExpense, removeExpense} from "../actions/expenses";

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        if (this.props.expense) {
            const expenseId = this.props.expense.id;
            this.props.editExpense(expenseId, expense)
        } else {
            this.props.addExpense(expense);
        }

        // Redirect to dashboard on from submit. (prop.history comes from react router)
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />

                <button className="remove-expense" onClick={this.onRemove}>Delete</button>
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
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        addExpense: (expense) => dispatch(addExpense(expense)),
        removeExpense: (id) => dispatch(removeExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);