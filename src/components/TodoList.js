import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList({todos, onRemove, onToggle}) {
    return (
        <ul className="TodoList">
            { todos.map( todo => 
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ) }
        </ul>
    )
}
