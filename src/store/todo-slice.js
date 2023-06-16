import { createSlice, nanoid } from '@reduxjs/toolkit';
import { ALL, ACTIVE, COMPLETED } from './filter-slice';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title) => ({
        payload: {
          title,
          id: nanoid(),
          completed: false,
        },
      }),
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todo = state.find((todo) => todo.id === id);
      todo.completed = !todo.completed;
    },
    editTodo: (state, action) => {
      const id = action.payload.id;
      const title = action.payload.title;
      const todo = state.find((todo) => todo.id === id);
      todo.title = title;
    }
  },
});

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case ALL: {
      return state.todos;
    }
    case ACTIVE: {
      return state.todos.filter((todo) => !todo.completed);
    }
    case COMPLETED: {
      return state.todos.filter((todo) => todo.completed);
    }
    default: {
      return state.todos;
    }
  }
};

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice;
