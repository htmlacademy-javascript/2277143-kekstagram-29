const FILTERS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit:'',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit:'',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit:'',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit:'%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit:'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit:'',
  }
];

const uploadImagePreview = document.querySelector('.img-upload__preview img');
const effectValue = document.querySelector('.effect-level__value');
const effectsContainer = document.querySelector('.effects');
const sliderLevelContainer = document.querySelector('.img-upload__effect-level');
const sliderLevel = document.querySelector('.effect-level__slider');

const defaultOnFilter = FILTERS[0];
let filterCurrent = defaultOnFilter;

const isDefault = () => filterCurrent === defaultOnFilter;

const openSlider = () => {
  sliderLevelContainer.classList.remove('hidden');
};

const closeSlider = () => {
  sliderLevelContainer.classList.add('hidden');
};

const updateSlider = () => {
  sliderLevel.noUiSlider.updateOptions({
    range: {
      min: filterCurrent.min,
      max: filterCurrent.max,
    },
    step: filterCurrent.step,
    start: filterCurrent.max,
  });
  if (isDefault()) {
    closeSlider();
  } else {
    openSlider();
  }
};

const changeFilters = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  filterCurrent = FILTERS.find((effect) => effect.name === evt.target.value);
  uploadImagePreview.className = `effects__preview--${filterCurrent.name}`;
  updateSlider();
};

const onUpdateSlider = () => {
  const sliderValue = sliderLevel.noUiSlider.get();
  uploadImagePreview.style.filter = isDefault() ? defaultOnFilter.style : `${filterCurrent.style}(${sliderValue}${filterCurrent.unit})`;
  effectValue.value = sliderValue;
};

const resetEffects = () => {
  filterCurrent = defaultOnFilter;
  updateSlider();
};

noUiSlider.create(sliderLevel, {
  range: {
    min: defaultOnFilter.min,
    max: defaultOnFilter.max,
  },
  start: defaultOnFilter.max,
  step: defaultOnFilter.step,
  connect: 'lower',
});
closeSlider();

effectsContainer.addEventListener('change', changeFilters);
sliderLevel.noUiSlider.on('update', onUpdateSlider);

export {resetEffects, effectsContainer, changeFilters};
