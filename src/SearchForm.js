import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this)
        this.searchGiphy = this.searchGiphy.bind(this)
    }

    searchGiphy(event) {
        event.preventDefault();
        const self = this;
        axios(`http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${self.state.value}`)
            .then(function (response) {
                self.props.onReceiveGifs(response.data.data);
            });
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
      return (
        <div>
          <h3>Search</h3>

          <form onSubmit={this.searchGiphy} className="form">
            <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Awesome gifs ahead"
                
            />
            <button type="button" className="fas fa-search" onClick={this.searchGiphy}></button>
          </form>
        </div>
      )
    }
  }

  export default SearchForm;
