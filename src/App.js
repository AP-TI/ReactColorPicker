import React, { useState } from 'react';
import Logo from './Logo.js';
import ColorComponent from './ColorComponent.js';
import './App.css';

function App() {
  const [color, setColor] = useState("#61DAFB");
  return (
    <div className="App">
      <header className="App-header">
        <Logo color={color}></Logo>
        <ColorComponent handleChange={(color) => setColor(color.hex)}></ColorComponent>
      </header>
    </div>
  );
}

export default App;
