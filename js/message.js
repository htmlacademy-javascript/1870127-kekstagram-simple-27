import './const.js';
import './util.js';

const errorMessageModel = document.querySelector('#error').content.querySelector('.error');
const successMessageModel = document.querySelector('#success').content.querySelector('.success');

function onEscKeydown(evt) {
  if (isEscKey(evt)) {
    closeError(evt);
  };
};
function showError(textMessage, buttonMessage = null) {
  const errorNode = errorMessageModel.cloneNode(true);
  errorNode.querySelector('.error__title').textContent = textMessage;
  if (buttonMessage) {
    errorNode.querySelector('.error__button').textContent = buttonMessage;
  };
  document.body.appendChild(errorNode);
  document.body.classList.add('is-error');
  errorNode.addEventListener('click', closeError);
  document.addEventListener('keydown', onEscKeydown);
};



function closeError(evt) {
  if (evt.target.closest('.error__inner') && !evt.target.closest('.error__button')) {
    return;
  };
  document.querySelector('.error').remove();
  document.body.classList.remove('is-error');
  document.removeEventListener('keydown', onEscKeydown);
};
function closeSuccess() {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onEscKeydown);
};
function showSuccess() {
  const successNode = successMessageModel.cloneNode(true);
  const closeButton = successNode.querySelector('.success__button');
  document.body.appendChild(successNode);
  closeButton.addEventListener('click', closeSuccess);
  document.addEventListener('keydown', onEscKeydown);
};

export { showError, closeError, onEscKeydown, closeSuccess, showSuccess };
