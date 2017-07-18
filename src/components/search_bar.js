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
      <div className="search">
        <div className="search-bar" >
          <form onSubmit={(e) => this.onSubmit(e)}>
            <input
              id="searchTerm"
              placeholder={this.props.placeholder}
              onChange={() => this.props.onSearchClear()} />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
