import { StateType } from 'typesafe-actions'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

export const createRootReducer = (appHistory: History, reducers: any[]) => combineReducers({
  ...reducers.reduce((store, reducer) => reducer(store), {}),
  router: connectRouter(appHistory),
})

export type RootState = StateType<ReturnType<typeof createRootReducer>>
