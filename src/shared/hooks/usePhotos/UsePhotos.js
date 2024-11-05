import { create } from 'zustand';
import { API_BASE_URL } from 'shared';

/**
 * @typedef {import('./types').PhotosStateCreator} StateCreator
 * @typedef {import('./types').PhotosState } State
 */

export const usePhotos = create(/** @type {StateCreator} */(set) => ({
  /* State for count */
  photoCount: 0,
  setPhotoCount: (photoCount) => set((/** @type {State} */state) => ({ ...state, photoCount })),
  /* State for photos */
  photos: [],
  isPhotosLoading: false,
  photosErrorMessage: '',
  getPhotos: async (count) => {
    set({ isPhotosLoading: true });

    try {
      const endPoint = `photos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      const data = await response.json();

      set({ photos: data, photosErrorMessage: '', isPhotosLoading: false });
    } catch (error) {
      set({ photosErrorMessage: 'Не удалось загрузить фотографии.', isPhotosLoading: false });
    }
  },
  resetPhotos: () => set((/** @type {State} */state) => ({ ...state, photos: [] })),
}));
