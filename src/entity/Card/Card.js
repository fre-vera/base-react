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
 * @returns
 */

const Photo = (props) => {
  const endPoint = `/photo/${props.photo.id}`;

  return (
    <Link to={endPoint}>
      <li className={classes.card}
        style={{ background: getRandomColor() }}
      >
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
 * @returns
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
 * @returns
 */

const Post = (props) => {
  const endPoint = `/post/${props.post.id}`;
  const background = getRandomColor();

  useEffect(() => {
    localStorage.setItem(String(props.post.id), background);
  }, []);

  return (
    <div className={classes.container}>
      <Link to={endPoint}>
        <li className={classes.card}
          style={{ background: getRandomColor() }}
        >
          <div className={classes.post}>
            <h2 className={classes.name}>
              {props.post.title}
            </h2>
            <p className={classes.text}>
              {props.post.body}
            </p>
          </div>
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
