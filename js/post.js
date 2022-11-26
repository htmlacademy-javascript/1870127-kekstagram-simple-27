import {API_URL, HttpMethod, JSON_HEADERS} from './const.js';
import {showError} from './message.js';

const postsContainer = document.querySelector('.pictures');
const postModel = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const setupPost = ( {
  url,
  comments,
  likes,
} ) => {
  const postElement = postModel.cloneNode( true );
  postElement.href = url;
  postElement.querySelector( '.picture__img' ).src = url;
  postElement.querySelector( '.picture__comments' ).textContent = comments;
  postElement.querySelector( '.picture__likes' ).textContent = likes;
  fragment.appendChild( postElement );
}

const renderPosts = () => {
  getPosts().then( ( posts ) => {
    posts.forEach( setupPost );
    postsContainer.appendChild( fragment );
  } ).catch((err) =>{   
    showError( 'Ошибка загрузки \'' + err.message + '\'', 'Как нибудь в другой раз' );
  } ); 
}

postsContainer.append(fragment);

const getPosts = () => {
  return fetch( `${API_URL}/data`, {
    method: HttpMethod.GET,
    headers: JSON_HEADERS,
  } ).then( ( response ) => {
    if ( response.ok ) {
      return response.json();
    }

  } );
}

export {renderPosts, getPosts, setupPost};
