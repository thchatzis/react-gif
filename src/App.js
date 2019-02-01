import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Results from './Results';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifList: []
    }

    this.updateGifs = this.updateGifs.bind(this)
  }

  updateGifs(gifs) {
    this.setState({
      gifList: gifs
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Gifs</h1>
        </header>
        
        <SearchForm onReceiveGifs={this.updateGifs} />
        <Results gifs={this.state.gifList} />
      </div>
    );
  }
}


export default App;
