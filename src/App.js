import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Results from './Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Gifs</h1>
        </header>
        <SearchForm />
        <Results />
      </div>
    );
  }
}


export default App;
