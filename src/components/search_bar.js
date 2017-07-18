import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onSubmit(event) {
    event.preventDefault();
    var searchTerm = document.getElementById('searchTerm');
    if (searchTerm) {
      var term = searchTerm.value;
      this.setState({term});
      this.props.onSearchTermChange({term});
    }
  }

  onSearchChange(term) {
    if (term === ''){
      this.props.onSearchClear();
    }
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            type="search"
            id="searchTerm"
            placeholder={this.props.placeholder}
            onChange={(e) => this.onSearchChange(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
