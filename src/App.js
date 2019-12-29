import React, { useState } from 'react';
import Logo from './Logo.js';
import { SwatchesPicker } from 'react-color';
import './App.css';

function App() {
  const [color, setColor] = useState("#61DAFB");
  return (
    <div className="App">
      <header className="App-header">
        <Logo color={color}/>
        <SwatchesPicker onChange={(color) => setColor(color.hex)}/>
      </header>
    </div>
  );
}

export default App;
