function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min){
    return NaN;
  }
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
function getStringLength(comment, maxLength) {

  return comment.length <= maxLength;
}
export {getRandomInt, getStringLength};
