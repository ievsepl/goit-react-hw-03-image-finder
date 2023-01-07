import React, { Component } from 'react';
import { Overlay, ModalStyle } from './Modal.styled';

// import pic from '../../cover.jpg';
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseEsc);
  }
  onCloseEsc = evt => {
    if (evt.code === 'Escape') {
      console.log('Esc');
      this.props.toggleModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseEsc);
  }
  backdropClose = evt => {
    console.log(evt);
    console.dir(evt.target.nodeName);
    console.log(evt.currentTarget);
    if (evt.target === evt.currentTarget) {
      this.props.toggleModal();
    }
  };
  render() {
    return (
      <Overlay className="overlay" onClick={this.backdropClose}>
        <ModalStyle className="modal">
          привет какашка
          <img src="" alt="" />
        </ModalStyle>
      </Overlay>
    );
  }
}
export default Modal;
