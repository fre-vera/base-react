import { useParams } from 'react-router-dom';
import { usePhotosStore } from 'shared/stores';

/**
 * @function PhotoPage
 * @returns {JSX.Element}
 */

export const PhotoPage = () => {
  const params = useParams();
  const photosStore = usePhotosStore();
  const photo = photosStore.getPhotoById(Number(params.photoId));

  if (!photo) return <p>Photo not found</p>;

  return (
    <div>
      <h2>{photo.title}</h2>
      <img src={photo.url}
        alt={photo.title} />
    </div>
  );
};
