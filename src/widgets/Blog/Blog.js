import classes from './Blog.module.scss';
import { PostsCounter, Posts } from 'features';
import { useEffect } from 'react';
import { usePosts, useTodos } from 'shared/stores';
import { Preloader } from 'shared/ui';

/**
 * @typedef {import('./types').PostsProps} PostsProps
 */

/**
 * @function Blog
 * @returns {JSX.Element}
 */


export const Blog = () => {
  const postsStore = usePosts();

  useEffect(() => {
    const { postCount } = postsStore;
    if (!postsStore.postCount) return;
    console.log({ postCount });
    postsStore.getPosts(postsStore.postCount);
  }, [postsStore.postCount]);

  return (
    <div className={classes.tasks}>
      <PostsCounter name={'Posts count'}/>
      <Preloader isActive={postsStore.isPostsLoading} />
      <Posts posts={postsStore.posts} />
    </div>
  );
};
