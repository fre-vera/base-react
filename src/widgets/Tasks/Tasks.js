import classes from './Tasks.module.scss';
import { TodosCounter, Todos } from 'features';
import { useEffect } from 'react';
import { useTodosStore } from 'shared/stores';
import { Preloader } from 'shared/ui';

/**
 * @typedef {import('./types').TasksProps} TasksProps
 */

/**
 * @function Tasks
 * @returns {JSX.Element}
 */


export const Tasks = () => {
  const todosStore = useTodosStore();

  useEffect(() => {
    const { todoCount } = todosStore;
    if (!todosStore.todoCount) return;
    console.log({ todoCount });
    todosStore.getTodos(todosStore.todoCount);
  }, [todosStore.todoCount]);

  return (
    <div className={classes.tasks}>
      <TodosCounter name={'Tasks count'}/>
      <Preloader isActive={todosStore.isTodosLoading} />
      <Todos todos={todosStore.todos} />
    </div>
  );
};
