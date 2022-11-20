import {API_URL, HttpMethod, JSON_HEADERS} from './const.js';
import {showError} from './message.js';

const postsContainer = document.querySelector('.pictures');
const postModel = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

function setupPost( {
  url,
  comments,
  likes,
} ) {
  const postElement = postModel.cloneNode( true );
  postElement.href = url;
  postElement.querySelector( '.picture__img' ).src = url;
  postElement.querySelector( '.picture__comments' ).textContent = comments;
  postElement.querySelector( '.picture__likes' ).textContent = likes;
  fragment.appendChild( postElement );
};


function renderPosts() {
  getPosts().then( ( posts ) => {
    posts.forEach( setupPost );
    postsContainer.appendChild( fragment );
  } );
};

postsContainer.append(fragment);
function getPosts() {
  return fetch( `${API_URL}/data`, {
    method: HttpMethod.GET,
    headers: JSON_HEADERS,
  } ).then( ( response ) => {
    if ( response.ok ) {
      return response.json();
    }
    else {
      showError( 'Ошибка загрузки изображений', 'Как нибудь в другой раз' );
    }
  } );
};

export {renderPosts, getPosts, setupPost};
