// const book = {
//     title: 'Three body problem',
//     author: 'Someone smart',
//     publisher: {
//         name: 'Penguin'
//     }
// }
//
// const { name: publisherName = 'Self-published' } = book.publisher;
//
// console.log(publisherName);


const address = ['18 Marshfield street', 'Manchester', 'M13 9JB']

const [street, city, postCode] = address;

console.log(street)

const item = ['Lemonade', '£2', '£2.50', '£3']

const [bevvy, , medium, ] = item

console.log(`A medium ${bevvy} costs ${medium}`)