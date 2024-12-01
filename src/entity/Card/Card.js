import { Link } from 'react-router-dom';
import { getRandomColor } from '../../shared/utils';
import classes from './Card.module.scss';

/**
 * @typedef {import('./types').CardProps} CardProps
 */

/**
 * @function Card
 * @param {CardProps} props
 * @returns {JSX.Element}
 */

export const Card = (props) => {
  const page = (props.image && 'photo') || (props.name && 'todo');
  const endPoint = `/${page}/${props.id}`;

  return (
    <>
      <Link to={endPoint}>
        <li className={classes.card}
          style={{ background: getRandomColor() }}
        >
          {/* name */}
          {props.name && (
            <h2 className={classes.name}>
              {props.name}
            </h2>
          )}
          {/* image */}
          {props.image && (
            <img className={classes.image}
              src={props.image}
              alt={props.name}
            />
          )}
          {/* text */}
          {props.text && (
            <p className={classes.text}>
              {props.text}
            </p>
          )}
        </li>
      </Link>
    </>
  );
};
