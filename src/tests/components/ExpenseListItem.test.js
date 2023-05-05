import React from "react";
import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

test('Should render single expense item', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});