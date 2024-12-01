import { Counter } from 'entity';
import { useEffect } from 'react';
import { usePhotos } from 'shared/hooks';

/**
 * @typedef {import('./types').PhotosCounterProps} Props
 */

/**
 * @function PhotosCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const PhotosCounter = (props) => {
  const photosState = usePhotos();

  useEffect(() => {
    photosState.setPhotoCount(1);
  }, []);

  return (
    <Counter name={'Photos count'}
      minCount={1}
      count={photosState.photoCount}
      setCount={photosState.setPhotoCount}
      maxCount={10}
      isDisabled={photosState.isPhotosLoading}
    />
  );
};
