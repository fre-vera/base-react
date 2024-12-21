import { Counter } from 'entity';
import { useEffect } from 'react';
import { useTodos } from 'shared/stores';

/**
 * @typedef {import('./types').TodosCounterProps} Props
 */

/**
 * @function TodosCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const TodosCounter = (props) => {
  const todosStore = useTodos();

  useEffect(() => {
    todosStore.setTodoCount(1);
  }, []);

  return (
    <Counter name={'Todos count'}
      minCount={1}
      count={todosStore.todoCount}
      setCount={todosStore.setTodoCount}
      maxCount={10}
      isDisabled={todosStore.isTodosLoading}
    />
  );
};
