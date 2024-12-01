import classes from './Counter.module.scss';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {

  const minCount = props.minCount ? props.minCount : 0;
  const maxCount = props.maxCount ? props.maxCount : 10;
  const isMinCount = props.count <= minCount;
  const isMaxCount = props.count >= maxCount;

  const handleAddCount = () => {
    if (isMaxCount) return;
    props.setCount(props.count + 1);
  };

  const handleReduceCount = () => {
    if (isMinCount) return;
    props.setCount(props.count - 1);
  };

  return (
    <div className={classes.counter}>
      {/* Name */}
      <h1>{props.name}</h1>
      <div>
        {/* Minus */}
        <button className={classes.button}
          disabled={isMinCount || props.isDisabled}
          onClick={handleReduceCount}
        >
          minus
        </button>
        {/* Plus */}
        <button className={classes.button}
          disabled={isMaxCount || props.isDisabled}
          onClick={handleAddCount}
        >
          plus
        </button>
      </div>
      {/* Reset */}
      <p>
        <button className={classes.button}
          disabled={isMinCount || props.isDisabled}
          onClick={() => props.setCount(minCount)}
        >
          reset
        </button>
      </p>
      <p>Counter:{props.count}</p>
    </div>
  );
};
