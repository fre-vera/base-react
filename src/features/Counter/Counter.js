import { useState } from 'react';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {
  const { minCount, maxCount, startCount } = props;
  const [count, setCount] = useState(startCount);
  const newMinCount = count <= minCount;
  const newMaxCount = count >= maxCount;

  const handleUpClick = () => {
    if (newMinCount) return;
    setCount(count - 1);
  };

  const handleDownClick = () => {
    if (newMaxCount) return;
    setCount(count + 1);
  };

  return (
    <div>
      <p>
        <h2>Count: {count}</h2>
      </p>
      <button onClick={handleUpClick}>
        Убавить
      </button>
      <button onClick={handleDownClick}>
        Прибавить
      </button>
      <p>
        <button onClick={() => setCount(startCount)}>
        Сброс на начальное значение
        </button>
      </p>
    </div>
  );
};
