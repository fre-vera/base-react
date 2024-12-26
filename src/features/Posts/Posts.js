import classes from './Posts.module.scss';
import { Card } from 'entity';

/**
 * @typedef {import('./types').PostsProps} PostsProps
 */

/**
 * @function Posts
 * @param {PostsProps} props
 * @returns {JSX.Element}
 */

export const Posts = (props) => {

  return (
    <ul className={classes.posts}>
      {props.posts.map((post) => (
        <Card key={post.postId}
          id={post.postId}
          name={post.title}
        />
      ))}
    </ul>
  );
};
