const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://localhost:27017';
const databaseName = 'task-app';

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database.');
    }

    const db = client.db(databaseName);
    
    // db.collection('users').insertOne({
    //     name: 'Guilherme',
    //     age: 27
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Error on insert user');
    //     }

    //     console.log(result);

    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 33
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Error on insert documents.')
    //     }

    //     console.log(result);
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Learn Node.js',
            completed: false
        }, {
            description: 'Learn Clean Architecture',
            completed: false
        }
    ], (error, result) => {
        if(error) return console.log('Fail to insert tasks');

        console.log(result);
    })

});