function isEscKey(evt) {
  return evt.key === 'Escape';
}

function resetStyleElement(element) {
  element.removeAttribute('style');
  element.removeAttribute('class');
}
export { resetStyleElement, isEscKey };
