
import { Store } from 'redux'
import { History } from 'history'
import { EpicMiddleware } from 'redux-observable'

import { RootAction } from '../actions'
import { RootState } from '../reducer'

export const configureHotReload = (
  store: Store,
  history: History,
  epicMiddleWare: EpicMiddleware<
    RootAction,
    RootAction,
    RootState
  >,
) => {
  if (module.hot && process.env.NODE_ENV === 'development') {
    const replaceReducerAndEpics = () => {
      const { createRootReducer } = require('../reducer')
      const { createRootEpic } = require('../epics')
      epicMiddleWare.run(createRootEpic())
      store.replaceReducer(createRootReducer(history))
    }
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', replaceReducerAndEpics)
    module.hot.accept('../epics', replaceReducerAndEpics)
  }
}
