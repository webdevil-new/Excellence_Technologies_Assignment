import React, {useState} from 'react';

function Todo({todos, completeTodo}) {

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo_row comple' : 'todo_row'}
        key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
        </div>
    )); 
}

export default Todo;
