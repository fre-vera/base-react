import { Counter } from 'entity';
import { useEffect } from 'react';
import { usePosts } from 'shared/stores';

/**
 * @typedef {import('./types').PostsCounterProps} Props
 */

/**
 * @function PostsCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const PostsCounter = (props) => {
  const postsStore = usePosts();

  useEffect(() => {
    postsStore.setPostCount(1);
  }, []);

  return (
    <Counter name={'Posts count'}
      minCount={1}
      count={postsStore.postCount}
      setCount={postsStore.setPostCount}
      maxCount={10}
      isDisabled={postsStore.isPostsLoading}
    />
  );
};
