import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import axios from 'axios';

class ImageGallery extends Component {
  state = { pageNumber: 1 };

  async componentDidUpdate() {
    const { queryName, MY_KEY, WEB } = this.props;

    try {
      console.log(queryName);
      const response = await axios.get(
        `${WEB}?key=${MY_KEY}&q=${queryName}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.pageNumber}&per_page=40`
      );
      console.log(response);
      const data = await response.json();
      console.log(data);

      return data;
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    const { queryName, MY_KEY, WEB } = this.props;
    return (
      <ul className="gallery">
        {}
        <ImageGalleryItem queryName={queryName} MY_KEY={MY_KEY} WEB={WEB} />
      </ul>
    );
  }
}
export default ImageGallery;

// const ImageGallery = ({ queryName, MY_KEY, WEB }) => {
//   return (
//     <ul className="gallery">
//       {}
//       <ImageGalleryItem queryName={queryName} MY_KEY={MY_KEY} WEB={WEB} />
//     </ul>
//   );
// };
