import { create } from 'zustand';
import { API_BASE_URL } from 'shared';

/**
 * @typedef {import('./types').TodosStoreCreator} StoreCreator
 * @typedef {import('./types').TodosStore } Store
**/

export const useTodosStore = create(/** @type {StoreCreator} */(set, get) => ({
  /* Store for count */
  todoCount: 0,
  setTodoCount: (todoCount) => set((/** @type {Store} */store) => ({ ...store, todoCount })),
  /* Store for todos */
  todos: [],
  isTodosLoading: false,
  todosErrorMessage: '',
  getTodos: async (count) => {
    set({ isTodosLoading: true });

    try {
      const endPoint = `todos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      const data = await response.json();

      set({ todos: data, todosErrorMessage: '', isTodosLoading: false });
    } catch (error) {
      set({ todosErrorMessage: 'Failed to load tasks.', isTodosLoading: false });
    }
  },
  resetTodos: () => set(() => ({ todos: [] })),

  getTodoById: (todoId) => {
    const { todos } = get();
    return todos.find((todo) => todo.id === todoId);
  },
}));
