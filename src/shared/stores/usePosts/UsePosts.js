import { create } from 'zustand';
import { API_FIREBASE_URL } from 'shared/config';
import { partial } from 'shared/utils';

/**
 * @typedef {import('./types').StoreCreator} StoreCreator
 * @typedef {import('./types').PostForCreate} PostForCreate
 * @typedef {import('./types').SetterCallback} SetterCallback
 * @typedef {import('./types').PostStore} PostStore
 */

/**
 * @function setPostCount
 * @param {Function} set
 * @param {number} postCount
 * @returns {void}
 */

const setPostCount = (set, postCount) => {
  set(/** @type {SetterCallback} */(store) => ({
    ...store,
    postCount,
  }));
};

/**
 * @function getPosts
 * @param {Function} set
 * @param {number} count
 * @returns {Promise<void>}
 */

const getPosts = async (set, count) => {
  try {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPostsLoading: true,
      posts: [],
      postsErrorMessage: '',
    }));
    const endPoint = `posts.json?orderBy="timestamp"&limitToLast=${count}`;
    const response = await fetch(`${API_FIREBASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Posts not received');
    const data = await response.json();

    const posts = Object.entries(data)
      .filter(([post]) => post !== null)
      .map(([id, post]) => ({ id, ...post }))
      .sort((a, b) => b.timestamp - a.timestamp);

    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPostsLoading: false,
      posts: [...posts],
      postsErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPostsLoading: false,
      posts: [],
      postsErrorMessage: error.message,
    }));
  }
};

/**
 * @function resetPosts
 * @param {Function} set
 * @returns {void}
 */

const resetPosts = (set) => {
  set(/** @type {SetterCallback} */(store) => ({
    ...store,
    posts: [],
  }));
};

/**
 * @function getPostById
 * @param {Function} set
 * @param {string} id
 * @returns {Promise<void>}
 */

const getPostById = async (set, id) => {
  try {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPostsLoading: true,
      post: null,
      postsErrorMessage: '',
    }));
    const response = await fetch(`${API_FIREBASE_URL}/posts/${id}.json`);
    if (!response.ok) throw new Error('Post not received');
    const post = await response.json();
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPostsLoading: false,
      post,
      postsErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPostLoading: false,
      post: null,
      postErrorMessage: error.message,
    }));
  }
};

/**
 * @function resetPost
 * @param {Function} set
 * @returns {void}
 */

const resetPost = (set) => {
  set(/** @type {SetterCallback} */(store) => ({
    ...store,
    post: null,
  }));
};

/**
 * @function createPost
 * @param {Function} set
 * @param {PostForCreate} postForCreate
 * @returns {Promise<void>}
 */

const createPost = async (set, postForCreate) => {
  try {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPostCreating: true,
      isPostCreated: false,
      postCreatingErrorMessage: '',
    }));
    const queryOpts = {
      method: 'POST',
      body: JSON.stringify(postForCreate),
      headers: { 'Content-type': 'application/json' },
    };
    const queryURL = `${API_FIREBASE_URL}/posts.json`;
    const response = await fetch(queryURL, queryOpts);
    if (!response.ok) throw new Error('Failed to create post');
    const resData = await response.json();

    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPostCreating: false,
      isPostCreated: Boolean(resData),
      postCreatingErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    const message = error.message;
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPostCreating: false,
      isPostCreated: false,
      postCreatingErrorMessage: message,
    }));
  }
};

/**
 * @function resetPostCreation
 * @param {Function} set
 * @returns {void}
 */

const resetPostCreation = (set) => {
  set(/** @type {SetterCallback} */(store) => ({
    ...store,
    isPostCreating: false,
    isPostCreated: false,
    postCreatingErrorMessage: '',
  }));
};

/**
 * @function usePosts
 * @returns {PostsStore} postsStore
 */

export const usePosts = create(/** @type {StoreCreator} */(set) => ({
  /* Post count state */
  postCount: 0,
  setPostCount: partial(setPostCount, set),

  /* state for getting posts */
  isPostsLoading: false,
  posts: [],
  postsErrorMessage: '',
  getPosts: partial(getPosts, set),
  resetPosts: partial(resetPosts, set),

  /* state for getting post */
  isPostLoading: false,
  post: null,
  postErrorMessage: '',
  getPostById: partial(getPostById, set),
  resetPost: partial(resetPost, set),

  /* state for create post */
  isPostCreating: false,
  isPostCreated: false,
  postCreatingErrorMessage: '',
  createPost: partial(createPost, set),
  resetPostCreation: partial(resetPostCreation, set),
}));
