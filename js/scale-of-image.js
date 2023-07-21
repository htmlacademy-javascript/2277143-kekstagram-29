const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const PERCENT = 100;
const NUMBER_SYSTEM = 10;
const imageElement = document.querySelector('.img-upload__preview img');
const scaleInputElement = document.querySelector('.scale__control--value');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');

/** функция для установки масштаба */
const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / PERCENT})`;
  scaleInputElement.value = `${value}%`;
};

/** обработчик клика - */
const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, NUMBER_SYSTEM);
  const newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    scaleImage(MIN_SCALE);
  } else {
    scaleImage(newValue);
  }
};

/** обработчик клика + */
const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, NUMBER_SYSTEM);
  const newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    scaleImage(MAX_SCALE);
  } else {
    scaleImage(newValue);
  }
};

/** функция сброса масштаба */
const resetScale = () => scaleImage(DEFAULT_SCALE);

export {resetScale, smallerButton, onSmallerButtonClick, biggerButton, onBiggerButtonClick};
