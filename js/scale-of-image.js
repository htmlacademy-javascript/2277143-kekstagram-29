const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const imageElement = document.querySelector('.img-upload__preview img');
const scaleInputElement = document.querySelector('.scale__control--value');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  const newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    scaleImage(MIN_SCALE);
  } else {
    scaleImage(newValue);
  }
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  const newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    scaleImage(MAX_SCALE);
  } else {
    scaleImage(newValue);
  }
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export {resetScale, smallerButton, onSmallerButtonClick, biggerButton, onBiggerButtonClick};
