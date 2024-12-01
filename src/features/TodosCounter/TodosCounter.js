import { Counter } from 'entity';
import { useEffect } from 'react';
import { useTodos } from 'shared/hooks';

/**
 * @typedef {import('./types').TodosCounterProps} Props
 */

/**
 * @function TodosCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const TodosCounter = (props) => {
  const todosState = useTodos();

  useEffect(() => {
    todosState.setTodoCount(1);
  }, []);

  return (
    <Counter name={'Todos count'}
      minCount={1}
      count={todosState.todoCount}
      setCount={todosState.setTodoCount}
      maxCount={10}
      isDisabled={todosState.isTodosLoading}
    />
  );
};
