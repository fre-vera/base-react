import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTodos } from 'shared/stores';
import { Preloader } from 'shared/ui';
import classes from './Todo.module.scss';
import { getRandomColor } from 'shared/utils';

/**
 * @function TodoPage
 * @returns {JSX.Element}
 */

export const TodoPage = () => {
  const params = useParams();
  const todosStore = useTodos();

  if (!params.todoId) return <p>Invalid todo id</p>;

  useEffect(() => {
    if (!params.todoId) return;
    todosStore.getTodoById(params.todoId);
  }, []);

  const [backgroundColor, setBackgroundColor] = useState('#282c34');

  useEffect(() => {
    setBackgroundColor(getRandomColor());
  }, []);

  if (!todosStore.todo) return <p>Todo not found</p>;

  return (
    <div className={classes.todoPage}>
      <div className={classes.todoCard}
        style={{ background: getRandomColor() }}
      >
        <h2 className={classes.todoTitle}>{todosStore.todo.title}</h2>
      </div>
      <Preloader isActive={todosStore.isTodoLoading} />
    </div>
  );
};
