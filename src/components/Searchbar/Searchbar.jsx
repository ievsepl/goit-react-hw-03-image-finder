import React, { Component } from 'react';
import { toast } from 'react-toastify';
// import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
// import fetchData from 'components/services/Api';
import {
  SearchForm,
  SearchFormButton,
  SearchFormBtnLab,
  SearchFormInput,
  SearchbarStyles,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchName: '',
    data: [],
  };

  onInput = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
    // console.log(this.state.searchName);
  };

  onSendSearchQuery = e => {
    e.preventDefault();
    if (this.state.searchName.trim() === '') {
      return toast.error('Please write your query');
    }
    console.log(this.state.searchName);

    this.props.onSubmitBtn(this.state.searchName);
    this.reset();

    // fetchData(this.state.searchName).then(data => this.setState({ data }));

    // fetchData(this.state.searchName).then(data => {
    //   return data.map(({ id, webformatURL, largeImageURL }) => {
    //     const picture = { id, webformatURL, largeImageURL };
    //     // console.log(picture);
    //     return this.setState(prevState => {
    //       return { data: [...prevState.data, picture] };
    //     });
    //   });
    // });
    // console.log(this.state.data);
  };

  reset = () => {
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <SearchbarStyles>
        <SearchForm onSubmit={this.onSendSearchQuery}>
          <SearchFormButton type="submit">
            <SearchFormBtnLab>s</SearchFormBtnLab>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onInput={this.onInput}
            value={this.state.searchName}
          />
        </SearchForm>
      </SearchbarStyles>
    );
  }
}
export default Searchbar;
