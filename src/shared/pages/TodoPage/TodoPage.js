import { useParams } from 'react-router-dom';
import { useTodosStore } from 'shared/hooks';

/**
 * @function TodoPagePage
 * @returns {JSX.Element}
 */

export const TodoPage = () => {
  const params = useParams();
  const todosStore = useTodosStore();
  const todo = todosStore.getTodoById(Number(params.todoId));

  if (!todo) return <p>Task not found</p>;

  return (
    <div>
      <h2>{todo.title}</h2>
    </div>
  );
};
