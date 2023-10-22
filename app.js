const express = require('express');
const { json } = require('body-parser');
const cors = require('cors')
const { getTodos, insertTodo, updateTodoStatus, getTodo} = require('./Store.todos')
const app = express();

app.use(json());
app.use(cors());

app.get('/todos',(request, response)=>{
    response.json(getTodos());
});

app.post('/todo',(request, response)=>{
    const { todo } = request.body;
    response.json( {id : insertTodo(todo)} );
});

app.get('/todo/:id',(request, response)=>{
    id = request.params.id;
    response.json( getTodo( id ) );
})

app.put('/todo/:id',(request, response)=>{
    id = request.params.id;
    response.json( updateTodoStatus( id ));
})

module.exports = app;