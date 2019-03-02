const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user')

const id ='5c79b188da2c010c9436c71e'

const id2 = '5c78f7a7d4ffb1277418b698'

//RETURNS AN ARRAY OF DOCUMENTS
// Todo.find({_id: id }).then((todos) => {
//     console.log(todos)
// });

//RETURNS THE DOCUMENT AS ITS OWN OBJECT
// Todo.findOne({_id: id }).then((todo) => {
//     console.log(todo)
// });

User.findById(id2).then((user) => {
    if(!user) {
        return console.log('The user with that id was not found');
    }

    console.log(user);

}, (error) => {
    console.log(error);
})


