import React, { useContext } from 'react';
import { Form, ListGroup, Row, Button, Col } from 'react-bootstrap';
import { TodosContext } from './TodosContext';
import { ArchiveFill } from 'react-bootstrap-icons';

const Todo = ({ todo, done, id }) => {
    const { markChecked, removeTodo } = useContext(TodosContext);
    return (
        <ListGroup.Item>
            <Row>
                <Col xs={11} className="todo-col">
                <Form.Check
                    onChange={markChecked.bind(this, id)}
                    checked={done} />
                <p className={done ? "checked-box" : "unchecked-box"}>{todo}</p>
                </Col>
                <Col xs={1}>
                <Button 
                    variant="link" 
                    onClick={removeTodo.bind(this, id)}
                    className="remove-btn">
                    <ArchiveFill />
                </Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
}

export default Todo;