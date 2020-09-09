import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ActiveTodos from './ActiveTodos';
import CompletedTodos from './CompletedTodos';
import AddTodoForm from './AddTodoForm';
import TodosList from './TodosList';

const TodoApp = () => {
    return (
        <div className="todo-app">
            <Tabs defaultActiveKey="All" id="noanim-tab-example" className=" mt-3">
                <Tab eventKey="All" title="All" className=" mt-3">
                    <AddTodoForm />
                    <TodosList />
                </Tab>
                <Tab eventKey="Active" title="Active" className=" mt-3">
                    <ActiveTodos />
                </Tab>
                <Tab eventKey="Completed" title="Completed" className=" mt-3">
                    <CompletedTodos />
                </Tab>
            </Tabs>
        </div>
    );
}

export default TodoApp;