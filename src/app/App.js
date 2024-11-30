import classes from './App.module.scss';
import { useEffect } from 'react';
import { Gallery, Tasks } from 'widgets';
import { usePhotos, useTodos } from 'shared/hooks';


/**
 * @typedef {import('./types').AppProps} AppProps
 */

/**
 * @function App
 * @param {AppProps} props
 * @returns {JSX.Element}
 */

export const App = (props) => {
  const defaultCount = 4;
  const photosState = usePhotos();
  const todosState = useTodos();

  useEffect(() => {
    photosState.setPhotoCount(defaultCount);
  }, []);

  useEffect(() => {
    todosState.setTodoCount(defaultCount);
  }, []);

  return (
    <div className={classes.app}>
      <h3>{props.name}</h3>
      <Gallery />
      <Tasks />
    </div>
  );
};
