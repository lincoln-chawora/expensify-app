const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is a resolved');
    }, 1500)
})

console.log('Before')
promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('Error: ', error);
})
console.log('After')
