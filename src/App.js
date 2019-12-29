import React, { useState } from 'react';
import Logo from './Logo.js';
import { SwatchesPicker } from 'react-color';
import './App.css';

function App() {
  const [color, setColor] = useState("#61DAFB");
  return (
    <div className="App">
      <header className="App-header">
        <Logo color={color}></Logo>
        <SwatchesPicker onChange={(color) => setColor(color.hex)}></SwatchesPicker>
      </header>
    </div>
  );
}

export default App;
