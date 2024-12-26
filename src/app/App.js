import classes from './App.module.scss';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { usePhotos, usePosts, useTodos } from 'shared/stores';
import { HomePage, PhotoPage, PhotosPage, TodoPage, TodosPage, PostPage, PostsPage } from 'shared/pages';
import { Header } from '../widgets/index';
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
  const photosStore = usePhotos();
  const todosStore = useTodos();
  const postsStore = usePosts();

  useEffect(() => {
    photosStore.setPhotoCount(defaultCount);
  }, []);

  useEffect(() => {
    todosStore.setTodoCount(defaultCount);
  }, []);

  useEffect(() => {
    postsStore.setPostCount(defaultCount);
  }, []);

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <header className={classes.content}>
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/photos/'} element={<PhotosPage />} />
            <Route path={'/photo/:photoId'} element={<PhotoPage />} />
            <Route path={'/todos/'} element={<TodosPage />} />
            <Route path={'/todo/:todoId'} element={<TodoPage />} />
            <Route path={'/posts/'} element={<PostsPage />} />
            <Route path={'/post/:postId'} element={<PostPage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
};
