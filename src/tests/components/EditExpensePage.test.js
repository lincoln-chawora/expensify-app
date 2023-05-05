import React from "react";
import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";
import {EditExpensePage} from "../../components/EditExpensePage";
let editExpense, addExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    addExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense}
        addExpense={addExpense}
        removeExpense={removeExpense}
        expense={expenses[0]}
        history={history}
    />)
})

test('Should render edit expense page directly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Should handle edit submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
})

test('Should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[0].id
    });
})