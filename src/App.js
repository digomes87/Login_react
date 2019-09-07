import React, { Component } from 'react';
import './App.css';
import { Navbar } from './components/layout/NavBar'

class App extends Component{
  render() {
    const Nome = 'Diego';
    const Carregando = false;


    // const Carregando = false ? "Jogo esta Carregando":"Jogo foi cancelado";

    

    return (
      <div className="App">
        {/* <h1>Aqui é React {Nome} e o, {Carregando ? "Carregando":"Vai pra casa"}</h1> */}
      

      <Navbar />
      </div>
    );
  }
}
export default App;
