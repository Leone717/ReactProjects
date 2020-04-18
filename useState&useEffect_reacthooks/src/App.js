import React, { Component } from 'react';
import './App.css';
import Awesome from './Awesome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Awesome init={1}/>
      </div>
    );
  }
}

export default App;
