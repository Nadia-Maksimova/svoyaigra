import { combineReducers, createStore } from "redux";
import questionReducer from "./Components/MainGame/questionReducer";

const store = createStore(combineReducers({ questionState: questionReducer }));

export default store;

export type RootState = ReturnType<typeof store.getState>;
