import React from 'react';
import './App.css';
import Calculator from './features/Calculator/Calculator';

const App = function (){
  return (
    <div className="wrap">
      <div className="container">
        <Calculator />
      </div>
    </div>

  );
};

export default App;
