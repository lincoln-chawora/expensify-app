import moment from "moment";

export default [
    {
        id: '1',
        description: 'Gum',
        amount: 195,
        createdAt: 0,
    },
    {
        id: '2',
        description: 'Rent',
        amount: 2000,
        createdAt: moment(0).subtract(4, 'days').valueOf(),
    },
    {
        id: '3',
        description: 'Water',
        amount: 500,
        createdAt: moment(0).add(4, 'days').valueOf(),
    }
]