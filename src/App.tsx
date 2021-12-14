import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Calculator from './features/Calculator/Calculator';

const App = function (){
  return (
    <div>
      <Calculator />
      <Counter />
    </div>

  );
};

export default App;
