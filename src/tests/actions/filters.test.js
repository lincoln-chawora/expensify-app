import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";
import moment from "moment";

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should generate sort by amount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
})

test('Should generate sort by date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
})

test('Should generate set text filter with value action object', () => {
    const action = setTextFilter('Rent')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    })
})

test('Should generate set text filter with default value action object', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})