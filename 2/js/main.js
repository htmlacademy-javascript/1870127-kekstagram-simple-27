//https://developer.mozilla.org/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
getRandomInt(0, 100);

//http://kodesource.top/javascript/form/string-length.php 
function stringlength(str, minlength, maxlength){ 

  let mnlen = minlength;
  let mxlen = maxlength;
  console.log(`Длина комментария `+ str.length+ ` символов`);
  if(str.length<minlength || str.length> maxlength){ 
    alert("Длина комментария не менее " + minlength + " и не более " + maxlength + " символов");
    return false;
  }else { 
    alert('Ваш комментарий принят');
  return true;
}
}
stringlength('текст 111111111111 ', 20, 140);

//https://basicweb.ru/  https://serblog.ru
let commet = document.querySelector('.text__description');
  commet.oninput = function (){
  this.value = this.value.slice(0, 140);
  if (input.value.length < 20 ) {
    alert('Слишком короткий комментарий');
  return false;
  }
}