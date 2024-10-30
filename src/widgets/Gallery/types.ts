import { Photos } from 'features/Photos/types';

export type GalleryProps = {
  name?: string;
  photos: Photos[];
  count: number;
  setCount: (count: number) => void;
}
