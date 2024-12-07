export type TodosFromAPI = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosStore = {
  /* Store for count */
  todoCount: number;
  setTodoCount: (todoCount: number) => void;
  /* Store for todos */
  todos: TodosFromAPI[] | [];
  isTodosLoading: boolean;
  todosErrorMessage: string;
  getTodos: (count: number) => void;
  resetTodos: () => void;
  /* Method for getting a todo by ID */
  getTodoById: (todoId: number) => TodosFromAPI | undefined;
};

export type TodosStoreCreator = (set: Function) => TodosStore;
