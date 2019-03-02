// const MongoClient = require('mongodb').MongoClient; 
const {MongoClient, ObjectId} = require('mongodb');

//Connects to the mongoDB server and gives access to the 'client' if there is no error
//Inside client you can access the databases on the server
MongoClient.connect('mongodb://localhost:27017/', (error, client) => {
    if(error){
       return console.log('unable to connect to mongoDB server...')
    }

    console.log('connected to the mongoDB servers');

    const db = client.db('TodoApp');

    db.collection('Users').insertOne({name: 'Thomas', age: 22, locations: 'Murray blvd'}).then((doc) => {
        console.log(doc.ops)
        
    }, (error) => {
        console.log(error);
    })



    client.close();
 }); 