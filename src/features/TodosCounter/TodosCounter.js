import { Counter } from 'entity';
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

  return (
    <Counter name={'Todos count'}
      count={todosState.todoCount}
      setCount={todosState.setTodoCount}
    />
  );
};
