import React, { Component } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onInput = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
    console.log(e.currentTarget.value);
  };

  onSendSearchQuery = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return toast.error('Please write your query');
    }
    this.props.onSubmitBtn(this.state.searchQuery);

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
            value={this.state.searchQuery}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
