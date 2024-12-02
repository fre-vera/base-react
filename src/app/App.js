import classes from './App.module.scss';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { usePhotosStore, useTodosStore } from 'shared/hooks';
import { HomePage, PhotoPage, TodoPage } from 'shared/pages';

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
  const photosStore = usePhotosStore();
  const todosStore = useTodosStore();

  useEffect(() => {
    photosStore.setPhotoCount(defaultCount);
  }, []);

  useEffect(() => {
    todosStore.setTodoCount(defaultCount);
  }, []);

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <h1>
          <Link to={'/'} className={classes.link}>{props.name}</Link>
        </h1>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/photo/:photoId'} element={<PhotoPage />} />
          <Route path={'/todo/:todoId'} element={<TodoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
