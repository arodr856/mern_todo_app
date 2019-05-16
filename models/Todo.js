const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({

    todo: { type: String },
    completed: {type: Boolean},
    due_date: {type: Date}
    
});

module.exports = Todo = mongoose.model('todo', TodoSchema);