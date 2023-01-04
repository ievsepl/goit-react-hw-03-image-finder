// import axios from 'axios';

const ImageGalleryItem = ({ queryName, MY_KEY, WEB }) => {
  return (
    <li className="gallery-item">
      <img src="" alt="" />
    </li>
  );
};
export default ImageGalleryItem;

// async componentDidMount(name, pageNumber) {
//   try {
//     const response = await axios.get(
//       `${this.state.WEB}?key=${this.state.MY_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=40`
//     );
//     console.log(response);
//     // const data = await response.json();
//     return response;
//     // console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
