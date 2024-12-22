export type TodosFromAPI = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosStore = {
  /* Todo count state */
  todoCount: number;
  setTodoCount: (todoCount: number) => void;
  /* Todos state */
  isTodosLoading: boolean;
  todos: TodosFromAPI[] | [];
  todosErrorMessage: string;
  getTodos: (count: number) => void;
  resetTodos: () => void;
  /* Todo state */
  isTodoLoading: boolean;
  todo: TodosFromAPI | null;
  todoErrorMessage: string;
  getTodoById: (todoId: string | number) => void;
  resetTodo: () => void;
};

export type SetterCallback = (store: TodosStore) => TodosStore;
export type StoreCreator = (set: Function) => TodosStore;
