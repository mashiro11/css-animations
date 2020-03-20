import React from 'react';
import logo from './logo.svg';
import './App.css';
import Basics from './components/Basics'
import Steps from './components/Steps'

function App() {
  return (
    <div>
      <h1>Css Animations</h1>
      <h2>TransitionFunctions</h2>
      <Basics />
      <h3>Controlled</h3>
      <Steps />
    </div>
  );
}

export default App;
