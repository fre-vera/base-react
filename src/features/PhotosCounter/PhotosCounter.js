import { Counter } from 'entity';
import { useEffect } from 'react';
import { usePhotos } from 'shared/stores';

/**
 * @typedef {import('./types').PhotosCounterProps} Props
 */

/**
 * @function PhotosCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const PhotosCounter = (props) => {
  const photosStore = usePhotos();

  useEffect(() => {
    photosStore.setPhotoCount(1);
  }, []);

  return (
    <Counter name={'Photos count'}
      minCount={1}
      count={photosStore.photoCount}
      setCount={photosStore.setPhotoCount}
      maxCount={10}
      isDisabled={photosStore.isPhotosLoading}
    />
  );
};
