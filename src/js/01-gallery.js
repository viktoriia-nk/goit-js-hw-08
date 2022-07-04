// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// import SimpleLightbox from "../../node_modules/simplelightbox";
// import "../../node_modules/simplelightbox/dist/simple-lightbox.min.css";


import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);


const galleryContainerEl = document.querySelector(".gallery")
const galleryItemMarkupEl = createGalleryItemMarkup(galleryItems)

galleryContainerEl.insertAdjacentHTML("beforeend", galleryItemMarkupEl)


function createGalleryItemMarkup(galleryItems){
    return galleryItems.map(({preview, original, description})=>{
        return `<li>    
        <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

    new SimpleLightbox('.gallery a', {  captionDelay : 250, captionsData: "alt"});