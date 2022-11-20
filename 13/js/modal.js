import { smallerButton, biggerButton } from './scale.js';
import { onFormChange, image } from './effects.js';
import { resetStyleElement } from './util.js';
import './post.js';
import { API_URL, HttpMethod } from './const.js';
import { showError, showSuccess } from './message.js';

const modalEditHandler = document.querySelector('.img-upload__overlay');
const uploadModalButton = document.querySelector('#upload-file');
const closeloadModalButton = document.querySelector('.img-upload__cancel');
const upLoadHandler = document.querySelector('.img-upload__form');
const upLoadSelect = document.querySelector('#upload-select-image');

const pristine = new Pristine(upLoadSelect, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form_comment_error'
});
const validateComment = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};
// закрытие формы о ESC
const onEscHandler = (evt) => {
  if (evt.key === 'Escape') {
    closeEditHandler();
  }
};
// открывание формы редактирования фото
function openEditHandler() {
  modalEditHandler.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscHandler);
  upLoadHandler.addEventListener('submit', validateComment);
  smallerButton.addEventListener('click', smallerButton);
  biggerButton.addEventListener('click', biggerButton);
  upLoadSelect.addEventListener('click', onFormChange);
};
// закрывание формы редактирования фото
function closeEditHandler() {
  if (!document.body.classList.contains('is-error')) {
    modalEditHandler.classList.add('hidden');
    document.body.classList.remove('modal-open');
    resetStyleElement(image);
    upLoadSelect.reset();
    document.removeEventListener('keydown', onEscHandler);
    upLoadHandler.addEventListener('submit', validateComment);
    upLoadSelect.removeEventListener('click', onFormChange);
  }
};

closeloadModalButton.addEventListener('click', () => {
  closeEditHandler();
});

uploadModalButton.addEventListener('change', () => {
  openEditHandler();
});

function sendRequest(evt) {
  return fetch(API_URL, {
    method: HttpMethod.POST,
    body: new FormData(evt.target),
  });
};

function sendForm(evt) {
  evt.preventDefault();
  const submitHandler = evt.target.querySelector('[type="submit"]');
  if (pristine.validate()) {
    submitHandler.setAttribute('disabled', 'disabled');
    sendRequest(evt).then((data) => {
      if (data.ok) {
        submitHandler.removeAttribute('disabled');
        closeEditHandler();
        showSuccess();
      }
    }).catch(() => {
      showError('Ошибка отправки формы');
      submitHandler.removeAttribute('disabled');
    });
  }
};

upLoadHandler.addEventListener('submit', sendForm);

export { upLoadHandler, sendRequest, sendForm };
