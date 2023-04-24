import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo-slice';
import filterSlice from './filter-slice';
import { loadState, saveState } from '../local-storage';
import throttle from 'lodash/throttle';

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    filter: filterSlice.reducer,
  },
  preloadedState: loadState(),
});

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000)
);

export default store;
