import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'>
        <h3 data-testid='counter'>{counter}</h3>
        <div>
          <button onClick={() => setCounter(counter - 1)} data-testid='minus-button' disabled={disabled}>-</button>
          <button onClick={() => setCounter(counter + 1)} data-testid='plus-button' disabled={disabled}>+</button>
        </div>
        <div>
          <button data-testid='on/off-button' style={{ backgroundColor: 'blue' }} onClick={() => setDisabled(!disabled)}>on/off</button>
        </div>
      </header>
    </div>
  );
}

export default App;
