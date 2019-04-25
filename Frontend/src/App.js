import React from 'react';
import logo from './logo.svg';
import './App.css';
import VeiculoGrid from './veiculo/veiculo-grid';


function App() {
  return (
    <div className="App">
      <div className="grid">
        <VeiculoGrid></VeiculoGrid>
      </div>
      <div className="formulario">
      </div>
    </div>
  );
}

export default App;
