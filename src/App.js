import React, { Component } from 'react';
import './App.css';

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

 class SearchForm extends Component {
   render() {
     return (
       <div>
         <h3>form</h3>
       </div>
     )
   }
 }

 class Results  extends Component {
  render() {
    return (
      <div>
        <h3>results</h3>
      </div>
    )  }
}

export default App;
