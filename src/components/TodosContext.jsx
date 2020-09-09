import React, { createContext, useState, useEffect } from 'react';
const LOCAL_STORAGE_KEY = "todo-app-local-storage";

export const TodosContext = createContext([]);

export const TodosProvider = (props) => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    );
    const [todo, setTodo] = useState("");

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const handleInputChange = e => {
        setTodo(e.target.value);
    }

    const addTodo = e => {
        e.preventDefault();
        setTodos(prevTodos => [...prevTodos, {todo, done: false, id: todos.length}]);
        setTodo("");
    }

    const markChecked = (id, event) => {
        setTodos(todos.map(
            todo => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                    console.log(id);
                }
                
                return todo;
            }
        ))
    }

    const deleteCompleted = () => {
        console.log("hello world");
        setTodos(todos => todos.filter(todo => !todo.done));
    }

    const removeTodo = (id, event) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    return (
        <TodosContext.Provider value={{ 
            todos, 
            handleInputChange, 
            addTodo, 
            markChecked, 
            todo,
            deleteCompleted,
            removeTodo }}>
            { props.children }
        </TodosContext.Provider>
    );
}