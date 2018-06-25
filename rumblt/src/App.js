import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

       <p> Here are some changes! </p>
       <h1>Hey, branch...</h1>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1 className="App-title">Hello! Tarin Added This!</h1>
          <h2>Tarin ALSO added this!!!</h2>
        </header>
        <img src="https://media.giphy.com/media/26FPCXdkvDbKBbgOI/giphy.gif" alt=""/>
        <p className="App-intro">
        <img src="https://assets.rbl.ms/10758471/980x.gif" alt=""/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

       <h1>Yo Fam</h1>
      </div>
    );
  }
}

export default App;
