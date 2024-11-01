export type Photos = {
  albulmId: number;
  id: number;
  title: string;
  url: string;
  thumbnaiUrl: string;
};

export type PhotosProps = {
  photos: Photos[];
};
