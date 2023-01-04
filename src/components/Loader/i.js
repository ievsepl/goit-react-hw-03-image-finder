// import fetchPictures from './fetchPictures.js';

// const refs = {
//   form: document.querySelector('.search-form'),
//   loadMoreBtn: document.querySelector('[data-loadMore]'),
//   gallery: document.querySelector('.gallery'),
// };

// let pageNumber = 1;
// let queryArray = '';
// let imgCards = '';

// refs.form.addEventListener('input', onInputFunction);
// refs.form.addEventListener('submit', onSubmitQuery);
// refs.gallery.addEventListener('click', onOpenPic);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

// function onInputFunction(e) {
//   queryArray = e.target.value.trim();
//   return;
// }

// function onSubmitQuery(e) {
//   e.preventDefault();
//   pageNumber = 1;

//   if (refs.form.searchQuery.value) {
//     onGetPic();
//     e.currentTarget.reset();
//     clearAll();
//     refs.loadMoreBtn.classList.add('is-hidden');
//     // Notify.success('O`k!!!SUPER Here we go');
//   } else {
//     Notify.failure('Sorry, You don`t write any name of picture');
//   }
// }

// function onGetPic() {
//   fetchPictures(queryArray, pageNumber).then(({ data }) => {
//     if (data.totalHits < 1) {
//       Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//       return;
//     } else if (data.hits.length < 1) {
//       refs.loadMoreBtn.classList.add('is-hidden');
//       Notify.failure(
//         "We're sorry, but you've reached the end of search results."
//       );
//     } else {
//       renderCard(data.hits);
//       refs.loadMoreBtn.classList.remove('is-hidden');
//       // console.log(data.totalHits);
//       refs.largeImage.refresh();
//       onScrollPage();
//       onTotalHits(data.totalHits);
//       return;
//     }
//   });
//   // .catch(error => {
//   //   // refs.loadMoreBtn.classList.add('is-hidden');
//   //   // Notify.failure(
//   //   //   "We're sorry, but you've reached the end of search results."
//   //   // );
//   //   console.log(error);
//   // });
// }

// function onTotalHits(totalHits) {
//   if (pageNumber === 1) {
//     Notify.success(`Hooray! We found ${totalHits} images.`);
//   } else {
//     Notify.success(' Here we go more');
//   }
// }

// function onLoadMore() {
//   pageNumber += 1;

//   onGetPic();
// }

// function renderCard(imgArr) {
//   imgCards = imgArr
//     .map(img => {
//       return `<div class="photo-card">
//     <a class="gallery__item"   href="${img.largeImageURL}"><img src=${img.webformatURL} alt="${img.q}" loading="lazy" /></a>
//     <div class="info">
//       <p class="info-item">
//         <b>Likes:</br>${img.likes}</b>
//       </p>
//       <p class="info-item">
//         <b>Views:</br>${img.views}</b>
//       </p>
//       <p class="info-item">
//         <b>Comments:</br>${img.comments}</b>
//       </p>
//       <p class="info-item">
//         <b>Downloads:</br>${img.downloads}</b>
//       </p>
//     </div>
//   </div>`;
//     })
//     .join('');
//   refs.gallery.insertAdjacentHTML('beforeend', imgCards);
// }

// function onOpenPic(event) {
//   // console.log(event.target.nodeName);
//   console.dir(event.target);
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

//   refs.largeImage.open(event.target);
// }

// function clearAll() {
//   refs.gallery.innerHTML = '';
// }

// function onScrollPage() {
//   const { height: cardHeight } = document
//     .querySelector('.gallery')
//     .firstElementChild.getBoundingClientRect();
//   if (pageNumber > 1) {
//     window.scrollBy({
//       top: cardHeight * 2,
//       behavior: 'smooth',
//     });
//   } else {
//     return;
//   }
// }

// // window.addEventListener('scroll', infinityScroll);

// // function infinityScroll() {
// //   const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
// //   if (scrollHeight - clientHeight === scrollTop) {
// //     onLoadMore();
// //   }else(wi)
// // }
// // npm install infinite-scroll
