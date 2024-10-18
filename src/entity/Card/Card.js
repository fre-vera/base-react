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
    <div className={'card'}>
      <img src={props.cardData.thumbnailUrl} />
    </div>
  );
};
