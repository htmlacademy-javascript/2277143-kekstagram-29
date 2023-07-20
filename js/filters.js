import {renderGallery} from './galery.js';
import {debounce} from './util.js';

const PHOTO_COUNT = 10;
const DEBOUNCR_TIME = 500;

const imgFilters = document.querySelector('.img-filters');
const imgForm = document.querySelector('.img-filters__form');
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const commentsFilter = document.querySelector('#filter-discussed');
const filterButtons = document.querySelectorAll('.img-filters__button');

const getFilters = () => imgFilters.classList.remove('img-filters--inactive');
const filtersPictures = (pictures, choiceButton) => {
  if (choiceButton === defaultFilter) {
    return pictures;
  }
  if (choiceButton === randomFilter) {
    return pictures.slice().sort(() => Math.random() - 0.5).slice(0, PHOTO_COUNT);
  }
  if (choiceButton === commentsFilter) {
    return pictures.slice().sort((a, b) => b.comments.length - a.comments.length);
  }
};

const removePictures = () =>
  document.querySelectorAll('.picture').forEach((picture) => picture.remove());

const onFilterClick = (evt, pictures) => {
  filterButtons.forEach((button) => button.classList.remove('img-filters__button--active'));

  const filterButton = evt.target;
  filterButton.classList.add('img-filters__button--active');

  removePictures();
  renderGallery(filtersPictures(pictures, filterButton));
};

const setDelayedFilter = (pictures) => {
  imgForm.addEventListener('click', debounce((evt) => {
    onFilterClick(evt, pictures);
  }, DEBOUNCR_TIME));
};

export {setDelayedFilter, getFilters};
