import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { LoadMoreBtn } from './Button/Button';
import { AppStyle } from './App.styled';

export class App extends Component {
  state = {
    searchName: '',
    renderModal: false,
    status: 'idle',
  };
  componentDidUpdate(_, prevState) {
    if (this.state.searchName !== prevState.searchName) {
      this.setState({ status: 'inWork' });
    }
  }

  onSubmit = searchName => {
    this.setState({ searchName });
    console.log(this.state.searchName);
  };

  toggleModal = () => {
    this.setState(({ renderModal }) => ({ renderModal: !renderModal }));
  };

  render() {
    const { renderModal, searchName, status } = this.state;
    const { toggleModal } = this;
    return (
      <AppStyle>
        <Searchbar onSubmitBtn={this.onSubmit} />
        <ImageGallery queryName={searchName} toggleModal={toggleModal} />
        {renderModal && <Modal toggleModal={toggleModal} />}
        {status === 'inWork' && <LoadMoreBtn />}
        <ToastContainer autoClose={2000} />
      </AppStyle>
    );
  }
}
