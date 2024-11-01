import { Photos, Counter } from 'features';

/**
 * @typedef {import('./types').GalleryProps} GalleryProps
 */

/**
 * @function Gallery
 * @param {GalleryProps} props
 * @returns {JSX.Element}
 */

export const Gallery = (props) => {
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
