const express = require('express');
const router = express.Router();

const TodoModel = require('../../models/Todo');

router.get('/', (req, res) => {
    TodoModel.find()
        .sort({date: 1})
        .then(todos => res.json(todos));
}); 

router.post('/', (req, res) => {
    
    const todo = new TodoModel({
        todo: "Apply for jobs",
        completed: false,
    });

    todo.save()
        .then(t => res.json(t));

});

module.exports = router;