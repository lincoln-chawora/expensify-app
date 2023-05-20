import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk";
import {
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startAddExpense, startRemoveExpense,
    startSetExpenses
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import db from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description,note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    db.ref('expenses').set(expensesData).then(() => done())
});

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should remove expense from firebase ', (done) => {
    const store = createMockStore({});

    const id = expenses[2].id;

    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id
        });
        return db.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
})

test('Should setup edit expense action object', () => {
    const newUpdates = { description: 'Pringles', note: 'This is a test edit' }

    const action = editExpense( '123abc',  newUpdates)

    expect(action).toEqual({
        'type': 'EDIT_EXPENSE',
        id: '123abc',
        updates: newUpdates
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
    const store = createMockStore({})
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
        return db.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
})

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
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
        return db.ref(`expenses/${actions[0].expense.id}`).once('value');
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
    const store = createMockStore({});

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    })
})

// test('Should setup add expense action object with default values', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         'type': 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//         },
//     })
// })