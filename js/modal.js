import { onFormChange, image, effectLevel } from './effects.js';
import { resetStyleElement } from './util.js';
import './post.js';
import { API_URL, HttpMethod } from './const.js';
import { showError, showSuccess } from './message.js';

const modalEditHandler = document.querySelector('.img-upload__overlay');
const uploadModalButton = document.querySelector('#upload-file');
const closeLoadModalButton = document.querySelector('.img-upload__cancel');
const upLoadHandler = document.querySelector('.img-upload__form');
const upLoadSelect = document.querySelector('#upload-select-image');

const pristine = new Pristine(upLoadSelect, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form_comment_error'
});

const validateCommentHandler = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

// закрывание формы редактирования фото
const closeEdit = () => {
  if (!document.body.classList.contains('is-error')) {
    modalEditHandler.classList.add('hidden');
    document.body.classList.remove('modal-open');
    resetStyleElement(image);
    upLoadSelect.reset();
    // document.removeEventListener('keydown', documentEscHandler);
    upLoadSelect.removeEventListener('click', onFormChange);
  }
};

// закрытие формы о ESC
const documentEscHandler = (evt) => {
  if (evt.key === 'Escape') {
    closeEdit();
  }
};

// открывание формы редактирования фото
const openEdit = () => {
  modalEditHandler.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', documentEscHandler);
  upLoadHandler.addEventListener('submit', validateCommentHandler);
  upLoadSelect.addEventListener('click', onFormChange);
  effectLevel.classList.add('hidden');
};

closeLoadModalButton.addEventListener('click', () => {
  closeEdit();
});

uploadModalButton.addEventListener('change', () => {
  openEdit();
  
});

function sendRequest(evt) {
  return fetch(API_URL, {
    method: HttpMethod.POST,
    body: new FormData(evt.target),
  });
}

const sendForm = (evt) => {
  evt.preventDefault();
  const submitHandler = evt.target.querySelector('[type="submit"]');
  if (pristine.validate()) {
    submitHandler.setAttribute('disabled', '');
    sendRequest(evt).then((data) => {
      if (data.ok) {
        submitHandler.removeAttribute('disabled');
        closeEdit();
        showSuccess();
      } else {
        submitHandler.removeAttribute('disabled');
        showError('Ошибка отправки формы');
      }
    }).catch(() => {

      showError('Ошибка отправки формы');
      submitHandler.removeAttribute('disabled');
    });
  }
};

upLoadHandler.addEventListener('submit', sendForm);
