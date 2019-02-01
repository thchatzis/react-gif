import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this)
    }

    searchGiphy(event) {
        event.preventDefault();
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

          <form onSubmit={this.searchGiphy}>
            <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Grand Manolo"
            />
          </form>
        </div>
      )
    }
  }

  export default SearchForm;
