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
    const args = getArgs(req.body);

    TodoModel.findByIdAndUpdate(req.params.id, args)
        .then(todo => res.json(todo))
        .catch(err => console.log(err));
}); 

const getArgs = (body) => {
    console.log(body);
    const args = {todo: 'work', completed: true};
    if(body.todo)
        args.todo = body.todo;
        
    if(body.completed)
        args.completed = body.completed;
    
    if(body.due_date)
        args.due_date = body.due_date;
    
    return args;
}

module.exports = router;