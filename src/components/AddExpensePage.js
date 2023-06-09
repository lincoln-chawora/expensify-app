import React from "react";
import ExpenseForm from "./ExpenseForm";
import {connect} from "react-redux";
import {startAddExpense} from "../actions/expenses";
import Heading from "./Heading";

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // Submit expense data.
        this.props.startAddExpense(expense);
        // Redirect to home page.
        this.props.history.push('/');
    };

    render() {
       return (
            <div>
                <Heading title="Add Expense" />
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      startAddExpense: (expense) => dispatch(startAddExpense(expense))
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);