import classes from './Blog.module.scss';
import { PostsCounter } from 'features';
import { useEffect } from 'react';
import { usePosts } from 'shared/stores';
import { Card } from 'features';
import { Preloader } from 'shared/ui';
import { Creator } from 'features/Posts/Creator';

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
      <Creator />
      {/* Список постов */}
      <ul className={classes.posts}>
        {postsStore.posts.map((post) => (
          <Card.Post key={post.id} post={post} />
        ))}
      </ul>
      <Preloader isActive={postsStore.isPostsLoading} />
    </div>
  );
};
