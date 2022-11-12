import {upLoadForm, commentValidate} from './form-valid.js';
import './scale.js';

const modalEditForm = document.querySelector('.img-upload__overlay');
const uploadModalButton = document.querySelector('#upload-file');
const closeloadModalButton = document.querySelector('.img-upload__cancel');

// закрытие формы о ESC
const onEscForm = (evt) => {
  if (evt.key === 'Escape') {
    closeEditForm ();
  }
};
// открывание формы редактирования фото
function openEditForm (){
  modalEditForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscForm);
  upLoadForm.addEventListener('submit', commentValidate);
}
// закрывание формы редактирования фото
function closeEditForm (){
  modalEditForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscForm);
  upLoadForm.addEventListener('submit', commentValidate);
}

closeloadModalButton.addEventListener('click', () => {
  closeEditForm();
});

uploadModalButton.addEventListener('change', () => {
  openEditForm();
});

export {upLoadForm};