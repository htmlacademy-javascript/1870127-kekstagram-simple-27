import {upLoadHandler, validateComment} from './form-valid.js';
import './scale.js';

const modalEditHandler = document.querySelector('.img-upload__overlay');
const uploadModalButton = document.querySelector('#upload-file');
const closeloadModalButton = document.querySelector('.img-upload__cancel');

// закрытие формы о ESC
const onEscHandler = (evt) => {
  if (evt.key === 'Escape') {
    closeEditHandler ();
  }
};
// открывание формы редактирования фото
function openEditHandler (){
  modalEditHandler.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscHandler);
  upLoadHandler.addEventListener('submit', validateComment);
}
// закрывание формы редактирования фото
function closeEditHandler (){
  modalEditHandler.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscHandler);
  upLoadHandler.addEventListener('submit', validateComment);
}

closeloadModalButton.addEventListener('click', () => {
  closeEditHandler();
});

uploadModalButton.addEventListener('change', () => {
  openEditHandler();
});

export {upLoadHandler};
