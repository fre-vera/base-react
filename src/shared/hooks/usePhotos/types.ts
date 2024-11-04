export type PhotoFromAPI = {
  albulmId: number;
  id: number;
  title: string;
  url: string;
  thumbnaiUrl: string;
};

export type PhotosStore = {
  count: number;
  photos: PhotoFromAPI[];
  isPhotosLoading: boolean;
  photosErrorMessage: string;
  getPhotos: (count: number) => void;
  resetPhotos: () => void;
};

export type PhotosStateCreator = (set: Function) => PhotosStore;
