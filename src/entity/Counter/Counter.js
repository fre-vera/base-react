// import { usePhotos } from 'shared/hooks';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = ({ count, setCount, name }) => {
  // const photosStore = usePhotos();

  const newMinCount = count <= 0;
  const newMaxCount = count >= 10;

  const handleUpClick = () => {
    // photosStore.resetPhotos();
    if (newMinCount) return;
    setCount(count - 1);
  };

  const handleDownClick = () => {
    if (newMaxCount) return;
    setCount(count + 1);
  };

  return (
    <div>
      {/* Name */}
      <p>
        {name}: {count}
      </p>
      {/* Up */}
      <button
        disabled={newMinCount}
        onClick={handleUpClick}
      >
        Убавить
      </button>
      {/* Down */}
      <button
        disabled={newMaxCount}
        onClick={handleDownClick}
      >
        Прибавить
      </button>
      {/* Reset */}
      <p>
        <button
          onClick={() => setCount(2)}
        >
        Сброс на начальное значение
        </button>
      </p>
    </div>
  );
};
