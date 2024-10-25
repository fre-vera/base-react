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
    <li className={'card'}>
      {/* name */}
      {props.name && (
        <h2 className='cardName'>
          {props.name}
        </h2>
      )}
      {/* image */}
      {props.image && (
        <img className='cardImg'
          src={props.image}
          alt={props.name}
        />
      )}
      {/* text */}
      {props.text && (
        <p className='cardText'>
          {props.text}
        </p>
      )}
    </li>
  );
};
