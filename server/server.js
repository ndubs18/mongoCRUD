var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json())


app.post('/todos', (req, res) => {

    console.log("Saving document into the collection \n", req.body.text)
    
    var todo = new Todo({text: req.body.text});

    todo.save().then((doc) => {
        res.send(doc)
    }, (error) => {
        res.status(400).send(error);
    })

})

app.post('/users', (req, res) => {

    console.log("Saving document into the collection \n", req.body.email)
    
    var user = new User({email: req.body.email});

    user.save().then((doc) => {
        res.send(doc)
    }, (error) => {
        res.status(400).send(error);
    })

})

app.listen(3000, () => {
    console.log('The server has started...')
})










