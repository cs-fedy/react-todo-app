import React from 'react';

const NoTodo = ({ tabName }) => {
    console.log("hello");
    return (
        <div className="no-todo">
            No todo for {tabName} tab 😔!!
        </div>
    );
}

export default NoTodo;