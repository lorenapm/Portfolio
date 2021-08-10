import React from 'react';
import { TodoItem } from "./components/TodoItem";

export function TodoList({todos}) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem />
            ))}
        </ul>
    )
}
