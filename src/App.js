import React from 'react';
import logo from './logo.svg';
import './App.css';
import Basics from './components/Basics'
import Steps from './components/Steps'
import Transform from './components/Transform'
import Cube from './components/Cube'
function App() {
  return (
    <div>
      <h1>Css Animations</h1>
      <h2>Transitions</h2>
      <h3>TransitionFunctions</h3>
      <Basics />
      <h3>Controlled</h3>
      <Steps />
      <h2>Transform</h2>
      <Transform />
      <h2>3D transform</h2>
      <Cube />
    </div>
  );
}

export default App;
