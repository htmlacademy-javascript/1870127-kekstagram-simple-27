import {DESCRIPTIONS} from './data.js';
import {getRandomInt} from './util.js';
let NUMBER_ID = 0;
const POST_COUNT = 25;
function getPhoto (){
  NUMBER_ID++;
  return {
    id: NUMBER_ID,
    url:`photo/${NUMBER_ID}.jpg`,
    description: DESCRIPTIONS[getRandomInt(0,DESCRIPTIONS.length - 1)],
    likes: getRandomInt(15,200),
    comments: getRandomInt(0,200)

  };
}
export const Photos = Array.from({length:POST_COUNT}, getPhoto);
