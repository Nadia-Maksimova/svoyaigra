import { combineReducers, createStore } from 'redux';
import questionReducer from './Components/MainGame/questionReducer';
import userReducer from './Components/Auth/userReducer';

const store = createStore(
  combineReducers({ questionState: questionReducer, userState: userReducer })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
