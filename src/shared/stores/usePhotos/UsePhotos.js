import { create } from 'zustand';
import { API_BASE_URL } from 'shared';
import { partial } from 'shared/utils';

/**
 * @typedef {import('./types').StoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} SetterCallback
 * @typedef {import('./types').PhotosStore } PhotoStore
 */

/**
 * @function setPhotoCount
 * @param {Function} set
 * @param {number} photoCount
 * @returns {void}
 */

const setPhotoCount = (set, photoCount) => {
  set(/** @type {SetterCallback} */(store) => ({
    ...store,
    photoCount,
  }));
};

/**
 * @function getPhotos
 * @param {Function} set
 * @param {number} count
 * @returns {Promise<void>}
 */

const getPhotos = async (set, count) => {
  try {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPhotosLoading: true,
      photos: [],
      photoErrorMessage: '',
    }));
    const endPoint = `photos?_start=0&_limit=${count}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) {
      throw new Error('Failed to fetch photo');
    }
    const photos = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPhotosLoading: false,
      photos,
      photosErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPhotosLoading: false,
      photos: [],
      photosErrorMessage: error.message,
    }));
  }
};

/**
 * @function resetPhotos
 * @param {Function} set
 * @returns {void}
 */

const resetPhotos = (set) => {
  set((/** @type {SetterCallback} */store) => ({
    ...store,
    photos: [],
  }));
};

/**
 * @function getPhotoById
 * @param {Function} set
 * @param {string} photoId
 * @returns {Promise<void>}
 */

const getPhotoById = async (set, photoId) => {
  try {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPhotosLoading: true,
      photo: null,
      photoErrorMessage: '',
    }));
    const endPoint = `photos/${photoId}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) {
      throw new Error('Failed to fetch photo');
    }
    const photo = await response.json();
    set((/** @type {SetterCallback} */store) => ({
      ...store,
      isPhotoLoading: false,
      photo,
      photoErrorMessage: '',
    }));
  } catch (/** @type {*} */error) {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPhotoLoading: false,
      photo: null,
      photoErrorMessage: 'Failed to load photo.',
    }));
  }
};

/**
 * @function resetPhoto
 * @param {Function} set
 * @returns {void}
 */

const resetPhoto = (set) => {
  set((/** @type {SetterCallback} */store) => ({
    ...store,
    photo: null,
    photoErrorMessage: '',
  }));
};

/**
 * @function usePhotos
 * @returns {PhotoStore}
 **/

export const usePhotos = create(/** @type {StoreCreator} */(set) => ({
  /* Photo count state */
  photoCount: 0,
  setPhotoCount: partial(setPhotoCount, set),
  /* Photos state */
  photos: [],
  isPhotosLoading: false,
  photosErrorMessage: '',
  getPhotos: partial(getPhotos, set),
  resetPhotos: partial(resetPhotos, set),
  /* Photo state */
  isPhotoLoading: false,
  photo: null,
  photoErrorMessage: '',
  getPhotoById: partial(getPhotoById, set),
  resetPhoto: partial(resetPhoto, set),
}));
