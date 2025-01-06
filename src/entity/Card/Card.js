import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRandomColor } from '../../shared/utils';
import classes from './Card.module.scss';

/**
 * @typedef {import('./types').PhotoProps} PhotoProps
 * @typedef {import('./types').TodoProps} TodoProps
 * @typedef {import('./types').PostProps} PostProps
 * @typedef {import('./types').Card} Card
 */

/**
 * @function Photo
 * @param {PhotoProps} props
 * @returns {JSX.Element}
 */

const Photo = (props) => {
  const endPoint = `/photo/${props.photo.id}`;

  return (
    <Link to={endPoint}>
      <li className={classes.card}>
        <h2 className={classes.name}>
          {props.photo.title}
        </h2>
        <img className={classes.image}
          src={props.photo.url}
          alt={props.photo.title}
        />
      </li>
    </Link>
  );
};

/**
 * @function Todo
 * @param {TodoProps} props
 * @returns {JSX.Element}
 */

const Todo = (props) => {
  const endPoint = `/todo/${props.todo.id}`;

  return (
    <Link to={endPoint}>
      <li className={classes.card}
        style={{ background: getRandomColor() }}
      >
        <h2 className={classes.name}>
          {props.todo.title}
        </h2>
      </li>
    </Link>
  );
};

/**
 * @function Post
 * @param {PostProps} props
 * @returns {JSX.Element}
 */

const Post = (props) => {
  const endPoint = `/post/${props.post.id}`;
  const background = getRandomColor();

  useEffect(() => {
    localStorage.setItem(String(props.post.id), background);
  }, []);

  return (
    <div className={classes['post-container']}>
      <Link to={endPoint}>
        <li className={classes['post-card']}
          style={{ background }}
        >
          <h2 className={classes['post-title']}>
            {props.post.title}
          </h2>
          <p className={classes['post-text']}>
            {props.post.body}
          </p>
        </li>
      </Link>
    </div>
  );
};


/** @type {Card} */
export const Card = {
  Photo,
  Todo,
  Post,
};
