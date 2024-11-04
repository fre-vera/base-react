import { API_BASE_URL } from 'shared';

/**
 * @typedef {import('./types').PhotosStateCreator} StateCreator
 */
import { create } from 'zustand';

export const usePhotos = create(/** @type {StateCreator} */(set) => ({
  count: 0,
  photos: [{
    albulmId: 1,
    id: 1,
    title: 'title',
    url: 'url',
    thumbnaiUrl: 'url',
  }],
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
  resetPhotos: () => set(() => ({ photos: [] })),
}));
