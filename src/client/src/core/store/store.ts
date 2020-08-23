import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import { globalStateReducer, globalState } from './../globalState/globalStateReducer';
import { fetchReducer, fetchState } from './../fetch/fetchReducer';
import { fetchMiddleware } from "core/fetch/fetchMiddleware";
export const reducers = combineReducers({globalStateReducer,fetchReducer});
export const rootStore = createStore(
  reducers,
  compose(
    applyMiddleware(fetchMiddleware)
  )
);

export interface rootStoreType {
   globalStateReducer: globalState[], 
   fetchReducer: fetchState<unknown>[]
}