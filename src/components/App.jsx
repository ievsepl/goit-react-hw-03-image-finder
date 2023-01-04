import React, { Component } from 'react';
// import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    MY_KEY: '31447881-15e5026ae3260bf72b1d03ba5',
    WEB: 'https://pixabay.com/api/',
    searchQuery: '',
  };

  onSubmit = query => {
    this.setState({ searchQuery: query });
    // console.log(data);
    // try {
    //   const response = axios
    //     .get(
    //       `${this.state.WEB}?key=${this.state.MY_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`
    //     )
    //     .then(data => console.log(data));
    //   console.log(response);
    //   // const data = response.json();
    //   // console.log(data);
    //   return response;
    // } catch (error) {
    //   console.error(error);
    // }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('update');
  //   if (prevState.searchQuery) {
  //   }
  // }
  render() {
    return (
      <div>
        <Searchbar onSubmitBtn={this.onSubmit} />
        <ImageGallery
          queryName={this.state.searchQuery}
          MY_KEY={this.state.MY_KEY}
          WEB={this.state.WEB}
        />
      </div>
    );
  }
}
