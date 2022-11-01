import{photos} from './app.js';

const posts = photos;
const postsContainer = document.querySelector('.pictures');
const postTemplate = document.querySelector('#picture').content.querySelector('.picture');
const generPost = function (item){
  const post = postTemplate.cloneNode(true);
  const postImg = post.querySelector('.picture__img');
  postImg.src = item.url;
  postImg.alt = item.description;
  post.querySelector('.picture__comments').textContent = `${item.comments}`;
  post.querySelector('.picture__likes').textContent = `${item.likes}`;
  return post;
};

const fragment = document.createDocumentFragment();

posts.forEach((post) => {
  const newPost = generPost(post);
  fragment.append(newPost);
});
postsContainer.append(fragment);
