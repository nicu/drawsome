import React, { Component, PropTypes } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  onTextChange(event) {
    this.setState({ query: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log(this.context);
    this.context.router.history.push('/search/' + this.state.query);
  }

  onClear() {
    this.setState({ query: '' });
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={event => this.onSubmit(event)}>
          <input
            type="text"
            value={this.state.query}
            onChange={event => this.onTextChange(event)}
            placeholder="Search for players, titles, lies"
          />
        </form>
        <button
          onClick={() => this.onClear()}
          hidden={this.state.query ? '' : 'hidden'}
        >
          Clear
        </button>
      </div>
    );
  }
}

SearchBar.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SearchBar;
