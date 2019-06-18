import React from 'react';

import Todos from './components/Todos';
import TodosForm from './components/TodosForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux ToDo list</h1>
      <Todos />
      <TodosForm />
    </div>
  );
}

export default App;
