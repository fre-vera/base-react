import classes from './Gallery.module.scss';
import { useEffect } from 'react';
import { PhotosCounter, Photos } from 'features';
import { usePhotosStore } from 'shared/stores';
import { Preloader } from 'shared/ui';

/**
 * @function Gallery
 * @returns {JSX.Element}
 */

export const Gallery = () => {
  const photosStore = usePhotosStore();

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
