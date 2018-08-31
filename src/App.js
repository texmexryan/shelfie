import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'


class App extends Component {
  constructor(props) {
        super(props);
        this.state = { 
          inventory: []
         }
    }
  
  
  
  
  render() {
    return (
      <div className="App">

      <Header/>
      <Dashboard/>
      <Form/>
      
      </div>
    );
  }
}











export default App;

{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p> */}