// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionUrl = 'mongodb://localhost:27017';
const databaseName = 'task-app';

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    
    if(error) {
        return console.log('Unable to connect to database.');
    }

    const db = client.db(databaseName);


});




// {
//     _id: new ObjectId("61ded9be215d8c275f697092"),
//     name: 'Guilherme',
//     age: 27
//   }


