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
// ACTION GENERATORS
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})