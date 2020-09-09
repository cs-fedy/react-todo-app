import React, { useContext } from 'react';
import { TodosContext } from './TodosContext';
import { ListGroup } from 'react-bootstrap';
import Todo from './Todo';

const TodosList = () => {
    const { todos } = useContext(TodosContext);
    return (
        <ListGroup className="all-todos">
            {todos.map(({ todo, done, id}) => <Todo todo={todo} done={done} id={id} key={id} />)}
        </ListGroup>        
    );
}

export default TodosList;