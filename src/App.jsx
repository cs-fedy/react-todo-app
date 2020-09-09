import React from 'react';
import { Container } from 'react-bootstrap';
import { TodosProvider } from './components/TodosContext';
import TodoApp from './components/TodoApp';

const App = () => {
  return (
    <div className="app">
      <TodosProvider>
        <Container>
          <h1 className="text-center title mt-3">#todo</h1>
          <TodoApp />
        </Container>
      </TodosProvider>
    </div>
  );
}

export default App;
