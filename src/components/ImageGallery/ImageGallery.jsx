import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ queryName, MY_KEY, WEB }) => {
  return (
    <ul className="gallery">
      {}
      <ImageGalleryItem queryName={queryName} MY_KEY={MY_KEY} WEB={WEB} />
    </ul>
  );
};
export default ImageGallery;

// try {
//   const response = axios
//     .get(
//       `${WEB}?key=${MY_KEY}&q=${queryName}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`
//     )
//     .then(data => {
//       return (
//         <ImageGalleryItem queryName={queryName} MY_KEY={MY_KEY} WEB={WEB} />
//       );
//     });

// //   // console.log(response);

// //   return response;
// }
//  catch (error) {
//   console.error(error);
// }
