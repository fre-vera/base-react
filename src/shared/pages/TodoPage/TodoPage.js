import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTodosStore } from 'shared/hooks';
import { getRandomColor } from 'shared/utils';
import classes from './Todo.module.scss';

/**
 * @function TodoPage
 * @returns {JSX.Element}
 */

export const TodoPage = () => {
  const params = useParams();
  const todosStore = useTodosStore();
  const todo = todosStore.getTodoById(Number(params.todoId));
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    setBackgroundColor(getRandomColor());
  }, []);

  if (!todo) return <p>Task not found</p>;

  return (
    <div className={classes.todoPage}>
      <div className={classes.todoCard}
        style={{ background: getRandomColor() }}
      >
        <h2 className={classes.todoTitle}>{todo.title}</h2>
      </div>
    </div>
  );
};
