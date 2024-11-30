import { create } from 'zustand';
import { API_BASE_URL } from 'shared';

/**
 * @typedef {import('./types').TodosStateCreator} StateCreator
 * @typedef {import('./types').TodosState } State
**/

export const useTodos = create(/** @type {StateCreator} */(set) => ({
  /* State for count */
  todoCount: 0,
  setTodoCount: (todoCount) => set((/** @type {State} */state) => ({ ...state, todoCount })),
  /* State for todos */
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
}));
