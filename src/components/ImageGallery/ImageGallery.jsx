import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
// import axios from 'axios';
import fetchData from 'components/services/Api';

class ImageGallery extends Component {
  state = {
    // searchName: '',
    pictures: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { queryName } = this.props;
    // const { data } = this.state;
    if (queryName !== prevProps.queryName) {
      try {
        fetchData(queryName).then(data => {
          return data.map(({ id, webformatURL, largeImageURL }) => {
            // const picture = { id, webformatURL, largeImageURL };
            // console.log(picture);
            return this.setState(prevState => {
              return {
                pictures: [
                  ...prevState.pictures,
                  { id, webformatURL, largeImageURL },
                ],
              };
            });
          });
        });
      } catch (error) {
        console.error(error);
      }
      window.addEventListener('click', this.onGetBigPic);
    }
  }

  // onGetBigPic = e => {
  //   console.dir(e.target.nodeName);
  //   console.log(e.currentTarget);
  //   if (e.target.nodeName === 'IMG') {
  //     this.props.toggleModal();
  //   }
  // };

  openModal = () => {};

  render() {
    return (
      <Gallery>
        <ImageGalleryItem picData={this.state.pictures} />
      </Gallery>
    );
  }
}
export default ImageGallery;
