export type TodosFromAPI = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosState = {
  /* State for count */
  todoCount: number;
  setTodoCount: (todoCount: number) => void;
  /* State for todos */
  todos: TodosFromAPI[] | [];
  isTodosLoading: boolean;
  todosErrorMessage: string;
  getTodos: (count: number) => void;
  resetTodos: () => void;
};

export type TodosStateCreator = (set: Function) => TodosState;
