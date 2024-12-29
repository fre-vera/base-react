import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from 'shared/stores';
import { Preloader } from 'shared/ui';
import classes from './Post.module.scss';
import { getRandomColor } from 'shared/utils';

/**
 * @function PostPage
 * @returns {JSX.Element}
 */

export const PostPage = () => {
  const params = useParams();
  const postsStore = usePosts();

  if (!params.postId) return <p>Invalid post id</p>;

  useEffect(() => {
    if (!params.postId) return;
    postsStore.getPostById(params.postId);
  }, []);

  const [backgroundColor, setBackgroundColor] = useState('#282c34');

  useEffect(() => {
    setBackgroundColor(getRandomColor());
  }, []);

  if (!postsStore.post) return <p>Post not found</p>;

  return (
    <div className={classes.postPage}>
      <div className={classes.postCard}
        style={{ background: getRandomColor() }}
      >
        <h2 className={classes.postTitle}>{postsStore.post.title}</h2>
        <p className={classes.postBody}>{postsStore.post.body}</p>
      </div>
      <Preloader isActive={postsStore.isPostLoading} />
    </div>
  );
};
