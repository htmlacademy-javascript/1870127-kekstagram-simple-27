const isEscKey = (evt) => evt.key === 'Escape';

const resetStyleElement = (element) => {
  element.removeAttribute('style');
  element.removeAttribute('class');
}

export { resetStyleElement, isEscKey };
