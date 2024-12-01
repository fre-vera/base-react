import { useParams } from 'react-router-dom';
import { usePhotos } from 'shared/hooks';

/**
 * @function PhotoPage
 * @returns {JSX.Element}
 */

export const PhotoPage = () => {
  const { photoId } = useParams();
  const photosState = usePhotos();
  const photo = photosState.photos
    .find((photo) => photo.id === Number(photoId));

  if (!photo) return <p>Photo not found</p>;

  return (
    <div>
      <h2>{photo.title}</h2>
      <img src={photo.url}
        alt={photo.title} />
    </div>
  );
};
