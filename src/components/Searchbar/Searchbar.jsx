import React, { Component } from 'react';
class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  onInput = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  onSendSearchQuery = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim === '') {
      alert('huyushki');
      return;
    }
    this.props.onSubmitBtn(this.state.searchQuery);
    // this.setState({ searchQuery: '' });

    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSendSearchQuery}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onInput={this.onInput}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
