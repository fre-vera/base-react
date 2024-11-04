import { useEffect } from 'react';
import { Photos, Counter } from 'features';
import { usePhotos } from 'shared/hooks';

/**
 * @typedef {import('./types').GalleryProps} GalleryProps
 */

/**
 * @function Gallery
 * @param {GalleryProps} props
 * @returns {JSX.Element}
 */

export const Gallery = (props) => {
  const photosStore = usePhotos();
  console.log('Photos:',photosStore.photos);
  useEffect(() => {});

  return (
    <div>
      <Counter
        name={'Photo count'}
        count={props.count}
        setCount={props.setCount}
      />
      <Photos photos={props.photos} />
    </div>
  );
};
