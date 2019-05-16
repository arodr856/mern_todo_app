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
        todo: req.body.todo,
        completed: false,
    });

    todo.save()
        .then(t => res.json(t));

});

router.delete('/:id', (req, res) => {
    TodoModel.findByIdAndDelete(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.sendStatus(404).json(err));
});

router.put('/:id', (req, res) => {
    TodoModel.findByIdAndUpdate(req.params.id, {todo: 'eat something'})
        .then(todo => res.json(todo))
        .catch(err => console.log(err));
}); 

module.exports = router;