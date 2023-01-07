import React, { Component } from 'react';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    activePicIdx: 0,
  };
  setActiveIdx = index => {
    console.log(index);
    // this.setState({ activePicIdx: index });
  };
  render() {
    const { picData } = this.props;
    return picData.map(({ id, webformatURL }, index) => {
      return (
        <GalleryItem key={id} onClick={this.setActiveIdx(index)}>
          <GalleryItemImg src={webformatURL} alt="" />
        </GalleryItem>
      );
    });
  }
}
export default ImageGalleryItem;
