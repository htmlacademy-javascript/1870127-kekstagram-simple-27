const upLoadHandler = document.querySelector('.img-upload__form');


const pristine = new Pristine(upLoadHandler, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form_comment_error'
});

const validateComment = (evt) => {
  if(!pristine.validate()){
    evt.preventDefault();
  }
};
export {upLoadHandler, validateComment};
