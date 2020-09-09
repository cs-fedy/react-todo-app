import React, { useContext } from 'react';
import { TodosContext } from './TodosContext';
import { ListGroup } from 'react-bootstrap';
import Todo from './Todo';

const ActiveTodos = () => {
    const { todos } = useContext(TodosContext);
    return (
        <ListGroup className="active-todos">
            {todos.map(({ todo, done, id}) => 
            !done && <Todo todo={todo} done={done} id={id} key={id} />)}
        </ListGroup>        
    );
}

export default ActiveTodos;