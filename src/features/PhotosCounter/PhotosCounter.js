import { Counter } from 'entity';
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

  return (
    <Counter name={'Photos count'}
      count={photosState.photoCount}
      setCount={photosState.setPhotoCount}
    />
  );
};
