const todos = [
    {
        todo: "Wake Up",
        Status: "Pending",
    },
    {
        todo: "Brush",
        Status: "Pending",
    },
    {
        todo: "Shower",
        Status: "Pending",
    },
    {
        todo: "Breakfast",
        Status: "Pending",
    },
];

const getTodos = () => {
    return todos;
}

const insertTodo = (todo) => {
    todos.push({todo,Status:"Pending"});
    return todos.length;
}

const updateTodoStatus = ( id ) => {
    todos[ id-1 ].Status = 'Done';
    return todos[id];
}

const getTodo = (id) => {
    return todos[ id-1 ]
}

module.exports = {
    getTodos,
    insertTodo,
    updateTodoStatus,
    getTodo
}
