import { TodosDetails } from 'features/Todos/types';

export type TasksProps = {
  name?: string;
  todos: TodosDetails[];
  count: number;
  setCount: (count: number) => void;
}
