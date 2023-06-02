import authReducer from "../../reducers/auth";


test('Should set uid', () => {
    const action = {
        type: 'LOGIN',
        uid: 'wehkjsbfibsf'
    }
    const state = authReducer({}, action)
    expect(state.uid).toEqual(action.uid)
})

test('Should logout user', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: 'anything'}, action);
    expect(state).toEqual({})
})
