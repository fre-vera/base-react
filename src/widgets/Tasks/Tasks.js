import classes from './Tasks.module.scss';
import { TodosCounter, Todos } from 'features';
import { useEffect } from 'react';
import { useTodos } from 'shared/hooks';

/**
 * @typedef {import('./types').TasksProps} TasksProps
 */

/**
 * @function Tasks
 * @returns {JSX.Element}
 */


export const Tasks = () => {
  const todosStore = useTodos();

  useEffect(() => {
    const { todoCount } = todosStore;
    if (!todosStore.todoCount) return;
    console.log({ todoCount });
    todosStore.getTodos(todosStore.todoCount);
  }, [todosStore.todoCount]);

  return (
    <div className={classes.tasks}>
      <TodosCounter name={'Tasks count'}/>
      <Todos todos={todosStore.todos} />
    </div>
  );
};
