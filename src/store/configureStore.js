import {combineReducers, createStore} from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

export default () => {
    // Store creation
    return createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Allows for redux dev tools to work
    );
};

