import React from 'react';
import logo from './logo.svg';
import './App.css';
import Configs from './components/configsApp/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Configs></Configs>
      </header>
    </div>
  );
}

export default App;
