import React, { useContext } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { TodosContext } from './TodosContext';

const AddTododForm = () => {
    const { handleInputChange, addTodo, todo } = useContext(TodosContext);
    return (
        <Form onSubmit={addTodo}>
            <Form.Row>
                <Col xs={9}>
                    <Form.Control
                    onChange={handleInputChange}
                    type="text" 
                    value={todo}
                    required
                    placeholder="your note..." />
                </Col>
                <Col  xs={3}>
                    <Button type="submit" className="mb-2 btn-full-width">Add</Button>
                </Col>
            </Form.Row>
        </Form>
    );
}

export default AddTododForm;