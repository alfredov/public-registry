import { applyMiddleware, compose, Store, StoreEnhancer } from 'redux'
import { History } from 'history'
import { EpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'connected-react-router'

import { RootAction } from '../actions'
import { RootState } from '../reducer'

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose

export type ApplicationStore = Store<RootState, RootAction>
type MiddlewareStoreEnhancer = StoreEnhancer<ApplicationStore, {}>

export const getEnhancers = (
  history: History,
  epicMiddleware: EpicMiddleware<
    RootAction,
    RootAction,
    RootState
  >,
) => {
  const historyMiddleware = routerMiddleware(history)
  const middlewares = [
    historyMiddleware,
    epicMiddleware,
  ]

  if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger')
    middlewares.push(
      createLogger({
        collapsed: () => true,
      }),
    )
  }

  return composeEnhancers(
    applyMiddleware(...middlewares),
  ) as MiddlewareStoreEnhancer
}
