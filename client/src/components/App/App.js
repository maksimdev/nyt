import React, { Component } from 'react';
import './App.css';
import SearchContainer from '../SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <main className="main">
          <h1>The New York Times Article Search!</h1>
          <SearchContainer />
        </main>
      </div>
    );
  }
}

export default App;
