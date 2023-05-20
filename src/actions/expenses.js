import db from "../firebase/firebase";

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        // Create defaults, this is similar to adding them in arguments.
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        // Create expense object to store data in var.
        const expense = { description, note, amount, createdAt };

        // Add expense into firebase (push will generate id in fb), then dispatch that
        // expense into the redux store, using the new id from firebase.
        return db.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        }).catch((e) => {
            console.log('Expense creation failed', e);
        })
    }
}
// Actions generators

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return db.ref(`expenses/${id}`).remove().then( () => {
            dispatch(removeExpense({id}))
        }).catch((e) => {
            console.log('Unable to remove expenses', e);
        });
    }
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return db.ref('expenses').once('value').then( (snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })

            dispatch(setExpenses(expenses))
        }).catch((e) => {
            console.log('Unable to return expenses', e);
        });
    }
};
