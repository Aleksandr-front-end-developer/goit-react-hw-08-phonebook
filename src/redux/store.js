import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contatsReducer, filterReducer } from './reducers';

const rootReducer = combineReducers({
  contacts: contatsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
