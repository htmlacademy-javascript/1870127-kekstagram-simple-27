
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min){
    return NaN;
  }
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
getRandomInt(0, 100);


function stringLength(comment, maxLength) {

  if (comment.length <= maxLength ) {
    return true;

  } return false;
}
//stringLength(140);

let num = 0;
let count = 25;
const descriptions = [
  'Не послушавшись рукописи, наш текст продолжил свой путь.',
  'Ценность яблок кроется в их составе',
  'Сложно сказать, почему небо темнеет',
  'Все чаще появляется информация',
  'Постоянный количественный рост станет частью наших традиций',
  'Внезапно, солнечных дней всё меньше'

];

function objectPhoto (){
  num++;
  return {
    id: num,
    url:`photo/${num}.jpg`,
    description: descriptions[getRandomInt(0,descriptions.length - 1)] ,
    likes: getRandomInt(15,200),
    comments: getRandomInt(0,200)

  };
}

const photos = Array.from({length:count}, objectPhoto);


