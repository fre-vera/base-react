import { getRandomColor } from '../../shared/utils';
import './Card.css';

/**
 * @typedef {import('./types').CardProps} CardProps
 */

/**
 * @function Card
 * @param {CardProps} props
 * @returns {JSX.Element}
 */

export const Card = (props) => {
  return (
    <li className={'card'}
      style={{ background: getRandomColor() }}
    >
      {/* name */}
      {props.name && (
        <h2 className={'name'}>
          {props.name}
        </h2>
      )}
      {/* image */}
      {props.image && (
        <img className={'image'}
          src={props.image}
          alt={props.name}
        />
      )}
      {/* text */}
      {props.text && (
        <p className={'text'}>
          {props.text}
        </p>
      )}
    </li>
  );
};
