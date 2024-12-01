import { useParams } from 'react-router-dom';
import { useTodos } from 'shared/hooks';

/**
 * @function TodoPagePage
 * @returns {JSX.Element}
 */

export const TodoPage = () => {
  const { todoId } = useParams();
  const todosState = useTodos();
  const todo = todosState.todos
    .find((todo) => todo.id === Number(todoId));

  if (!todo) return <p>Task not found</p>;

  return (
    <div>
      <h2>{todo.title}</h2>
    </div>
  );
};
