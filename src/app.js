import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import "react-dates/lib/css/_datepicker.css";
import {addExpense} from "./actions/expenses";
import moment from "moment";

const store = configureStore();

store.dispatch(addExpense( { description: 'Water bill', amount: 68, createdAt: moment().clone().add(-1, 'day') }));
store.dispatch(addExpense( { description: 'Rent', amount: 1067, createdAt: moment().clone().add(-5, 'day') }));
store.dispatch(addExpense( { description: 'Gas bill', amount: 101, createdAt: moment().clone().add(-10, 'day') }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))
