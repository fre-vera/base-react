/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = ({ count, setCount, name }) => {
  const newMinCount = count <= 0;
  const newMaxCount = count >= 10;

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
        {name}: {count}
      </p>
      <button onClick={handleUpClick}>
        Убавить
      </button>
      <button onClick={handleDownClick}>
        Прибавить
      </button>
      <p>
        <button onClick={() => setCount(2)}>
        Сброс на начальное значение
        </button>
      </p>
    </div>
  );
};
