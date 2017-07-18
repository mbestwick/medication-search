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

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            id="searchTerm"
            placeholder={this.props.placeholder}/>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
