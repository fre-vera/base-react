import { create } from 'zustand';
import { API_BASE_URL } from 'shared';
import { partial } from 'shared/utils';

/**
 * @typedef {import('./types').StoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} SetterCallback
 * @typedef {import('./types').TodosStore } TodoStore
 */

/**
 * @function setTodoCount
 * @param {Function} set
 * @param {number} todoCount
 * @returns {void}
 */

const setTodoCount = (set, todoCount) => {
  set(/** @type {SetterCallback} */(store) => ({
    ...store,
    todoCount,
  }));
};

/**
 * @function getTodos
 * @param {Function} set
 * @param {number} count
 * @returns {Promise<void>}
 */

const getTodos = async (set, count) => {
  try {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isTodosLoading: true,
      todos: [],
      todoErrorMessage: '',
    }));
    const endPoint = `todos?_start=0&_limit=${count}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) {
      throw new Error('Failed to fetch todo');
    }
    const todos = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodosLoading: false,
      todos,
      todosErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodosLoading: false,
      todos: [],
      todosErrorMessage: error.message,
    }));
  }
};

/**
 * @function resetTodos
 * @param {Function} set
 * @returns {void}
 */

const resetTodos = (set) => {
  set((/** @type {SetterCallback} */store) => ({
    ...store,
    todos: [],
  }));
};

/**
 * @function getTodoById
 * @param {Function} set
 * @param {string} todoId
 * @returns {Promise<void>}
 */

const getTodoById = async (set, todoId) => {
  try {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isTodosLoading: true,
      todo: null,
      todoErrorMessage: '',
    }));
    const endPoint = `todos/${todoId}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) {
      throw new Error('Failed to fetch todo');
    }
    const todo = await response.json();
    set((/** @type {SetterCallback} */store) => ({
      ...store,
      isTodosLoading: false,
      todo,
      todoErrorMessage: '',
    }));
  } catch (/** @type {*} */error) {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodosLoading: false,
      todo: null,
      todoErrorMessage: 'Failed to load todo.',
    }));
  }
};

/**
 * @function resetTodo
 * @param {Function} set
 * @returns {void}
 */

const resetTodo = (set) => {
  set((/** @type {SetterCallback} */store) => ({
    ...store,
    todo: null,
    todoErrorMessage: '',
  }));
};

/**
 * @function useTodos
 * @returns {TodoStore}
 **/

export const useTodos = create(/** @type {StoreCreator} */(set) => ({
  /* Thodo count state */
  todoCount: 0,
  setTodoCount: partial(setTodoCount, set),
  /* Todos state */
  todos: [],
  isTodosLoading: false,
  todosErrorMessage: '',
  getTodos: partial(getTodos, set),
  resetTodos: partial(resetTodos, set),
  /* Todo state */
  isTodoLoading: false,
  todo: null,
  todoErrorMessage: '',
  getTodoById: partial(getTodoById, set),
  resetTodo: partial(resetTodo, set),
}));
