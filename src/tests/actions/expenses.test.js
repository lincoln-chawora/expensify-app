import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk";
import {
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startAddExpense, startRemoveExpense, startEditExpense,
    startSetExpenses
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import db from "../../firebase/firebase";

const uid = 'thisismytestuid';
const defaultAuthState = { auth: {uid} };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description,note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    db.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
});

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should remove expense from firebase ', (done) => {
    const store = createMockStore(defaultAuthState);

    const id = expenses[2].id;

    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id
        });
        return db.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
})

test('Should setup edit expense action object', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    const updates = { description: 'Pringles' };

    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        });
        return db.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().description).toBe(updates.description);
        done();
    })
})

test('Should setup add expense with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        'type': 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('Should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: "Sensations",
        amount: 150,
        createdAt: 1000,
        note: "Chili flavour ofc"
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        // In the db get the first expenses id, only once and then check if that data matches what we created above
        // inside expenseData.
        return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
})

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseDefaults = {
        description: "",
        amount: 0,
        createdAt: 0,
        note: ""
    }
    store.dispatch(startAddExpense({expenseDefaults})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })

        // In the db get the first expenses id, only once and then check if that data matches what we created above
        // inside expenseData.
        return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
})

test('Should set up set expense action object with data', () => {
    const action = setExpenses(expenses);

    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('Should fetch data expenses from firebase ', (done) => {
    const store = createMockStore(defaultAuthState);

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    })
})
