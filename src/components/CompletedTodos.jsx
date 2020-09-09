import React, { useContext } from 'react';
import { TodosContext } from './TodosContext';
import { ListGroup, Button } from 'react-bootstrap';
import Todo from './Todo';

const CompletedTodos = () => {
    const { todos, deleteCompleted } = useContext(TodosContext);
    return (
        <div className="completed-todos">
            <ListGroup >
                {todos.map(({ todo, done, id}) => 
                done && <Todo todo={todo} done={done} id={id} key={id} />)}
            </ListGroup>   
            <Button 
                className="mt-3 btn-full-width" 
                onClick={deleteCompleted}
                variant="danger">
                    Remove completed todos
            </Button>
        </div>
    );
}

export default CompletedTodos;