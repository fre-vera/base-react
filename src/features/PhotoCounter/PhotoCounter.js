// import { usePhotos } from 'shared/hooks';
import { useState } from 'react';
import { Counter } from 'entity';
import { usePhotos } from 'shared/hooks';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function PhotoCounter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const PhotoCounter = (props) => {
  const photosStore = usePhotos();
  const [count, setCount] = useState();

  return (
    <Counter />
  );
};
