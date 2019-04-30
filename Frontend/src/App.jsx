import React from 'react';
import logo from './logo.svg';
import './App.css';
import VeiculoGrid from './veiculo/veiculo-grid';
import VeiculoForm from './veiculo/veiculo-form';


const App = () => {

  return (
    <div className="App">
      <div className="grid">
        <VeiculoGrid></VeiculoGrid>
      </div>
      <div className="spacer" />
      <div className="form">
        <VeiculoForm></VeiculoForm>
      </div>
    </div>
  );

}

export default App;
