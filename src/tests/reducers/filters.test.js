import filtersReducer from "../../reducers/filters"
import moment from "moment";

test('Should set up default filters values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
    const text = 'rent'
    const action = { type: 'SET_TEXT_FILTER', text}
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('Should set start date filter', () => {
    const startDate = moment()
    const action = { type: 'SET_START_DATE', startDate}
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})

test('Should set end date filter', () => {
    const endDate = moment()
    const action = { type: 'SET_END_DATE', endDate}
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})



