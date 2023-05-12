import React from "react";
import {shallow} from "enzyme";
import {ExpensesSummary} from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";
import selectExpensesTotal from "../../selectors/expenses-total";

test('Should render 1 expenses with £1.95 total', () => {
    const total = selectExpensesTotal([expenses[0]]);
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expensesTotal={total}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render 2 expenses with £46.95 total', () => {
    const total = selectExpensesTotal([expenses[0], expenses[2]]);
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expensesTotal={total}/>);
    expect(wrapper).toMatchSnapshot();
});
