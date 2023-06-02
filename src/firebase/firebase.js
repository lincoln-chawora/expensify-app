import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, db as default };

// const addToExpenses = (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// };

// db.ref('expenses').on('value', addToExpenses);
//
//
// db.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });
//
// db.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// db.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// db.ref('expenses/-NVrOK61QEC-d5a7eUZn').update({
//     note: "Water payment (none meter)",
// })
//
// db.ref('expenses').push({
//     description: "Snacks",
//     note: "Mi mental health",
//     amount: 15,
//     createdAt: moment.now()
// })
//
// db.ref('expenses').push({
//     description: "Water bill",
//     note: "Gotta keep the water running",
//     amount: 67,
//     createdAt: moment.now()
// })


// db.ref().update({
//     'job/company': 'TPX Impact',
// })
//
// db.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     const sentence = data.name + " is a " + data.job.title + " at " + data.job.company;
//     console.log(sentence)
// })


// db.ref()
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val())
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })

// db.ref().set({
//     name: 'Lincoln',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Drupal Dev',
//         company: 'CTI Digital'
//     },
//     location: {
//         city: "Manchester",
//         country: "England"
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed', e)
// })

// db.ref('isSingle').remove().then(() => {
//     console.log('Data is removed')
// }).catch((e) => {
//     console.log('This remove failed failed', e)
// })

// db.ref().update({
//     stressLevel: 3,
//     'job/company': 'Full stack developer',
//     'location/city': 'London',
// })