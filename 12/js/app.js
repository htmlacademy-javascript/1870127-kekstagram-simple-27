import {DESCRIPTIONS} from './data.js';
import {getRandomInt} from './util.js';
let numberId = 0;
const POST_COUNT = 25;
function getPhoto (){
  numberId++;
  return {
    id: numberId,
    url:`photos/${numberId}.jpg`,
    description: DESCRIPTIONS[getRandomInt(0,DESCRIPTIONS.length - 1)],
    likes: getRandomInt(15,200),
    comments: getRandomInt(0,200)

  };
}
export const photos = Array.from({length:POST_COUNT}, getPhoto);
