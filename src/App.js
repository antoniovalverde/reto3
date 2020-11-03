import React from 'react';
import './App.scss';
import Header from './components/Header/Header.jsx';
import Pizarra from './components/Pizarra/Pizarra.jsx';

function App() {
  return (
    <div className="treyo">
      <Header/>
      <Pizarra/>
    </div>
  );
}

export default App;
