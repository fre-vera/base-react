import classes from './Gallery.module.scss';
import { useEffect } from 'react';
import { PhotosCounter, Photos } from 'features';
import { usePhotos } from 'shared/hooks';
import { Preloader } from 'shared/ui';

/**
 * @function Gallery
 * @returns {JSX.Element}
 */

export const Gallery = () => {
  const photosStore = usePhotos();

  useEffect(() => {
    const { photoCount } = photosStore;
    if (!photosStore.photoCount) return;
    console.log({ photoCount });
    photosStore.getPhotos(photosStore.photoCount);
  }, [photosStore.photoCount]);

  return (
    <div className={classes.gallery}>
      <PhotosCounter name={'Photo count'}/>
      <Preloader isActive={photosStore.isPhotosLoading} />
      <Photos photos={photosStore.photos} />
    </div>
  );
};
