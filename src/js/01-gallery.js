import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const imageContainer = document.querySelector('.gallery');

function createImageGalery(elements) {
  return elements
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        loading="lazy"
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                    />
                </a>
             </div>`
    )
    .join('');
}

const imageMarkup = createImageGalery(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', imageMarkup);

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
