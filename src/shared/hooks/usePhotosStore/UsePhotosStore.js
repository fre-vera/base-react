import { create } from 'zustand';
import { API_BASE_URL } from 'shared';

/**
 * @typedef {import('./types').PhotosStoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} Setter
 * @typedef {import('./types').PhotosStore } Store
 */

export const usePhotosStore = create(/** @type {StoreCreator} */(set, get) => ({
  /* Store for count */
  photoCount: 0,
  setPhotoCount: (photoCount) => set((/** @type {Setter} */store) => ({ ...store, photoCount })),
  /* Store for photos */
  photos: [],
  isPhotosLoading: false,
  photosErrorMessage: '',
  getPhotos: async (count) => {
    try {
      set(/** @type {Setter} */(store) => ({ ...store, isPhotosLoading: true }));
      const endPoint = `photos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      const data = await response.json();
      set({ photos: data, photosErrorMessage: '', isPhotosLoading: false });
    } catch (error) {
      set({ photosErrorMessage: 'Failed to upload photos.', isPhotosLoading: false });
    }
  },
  resetPhotos: () => set((/** @type {Setter} */store) => ({ ...store, photos: [] })),

  getPhotoById: (photoId) => {
    const { photos } = get();
    return photos.find((photo) => photo.id === photoId);
  },
}));
