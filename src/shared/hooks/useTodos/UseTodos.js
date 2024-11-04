import { API_BASE_URL } from 'shared';

/**
 * @typedef {import('./types').TodosStateCreator} StateCreator
**/

import { create } from 'zustand';

export const useTodos = create(/** @type {StateCreator} */(set) => ({
  todos: [{
    userId: 1,
    id: 2,
    title: 'title',
    completed: false,
  }],
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
      set({ todosErrorMessage: 'Не удалось загрузить задачи.', isTodosLoading: false });
    }
  },
  resetTodos: () => set(() => ({ todos: [] })),
}));
