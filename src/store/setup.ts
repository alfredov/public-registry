
import { History } from 'history'
import { createEpicMiddleware } from 'redux-observable'
import { createStore } from 'redux'

import { createRootReducer, RootState } from './reducer'
import { createRootEpic } from './epics'
import { getEnhancers, configureHotReload, ApplicationStore } from './utils'

export default (
  history: History,
  reducers: any[],
  epics: any[],
  initialState?: RootState,
): ApplicationStore => {
  const epicMiddleWare = createEpicMiddleware<any, any, any>()
  const enhancers = getEnhancers(history, epicMiddleWare)

  const store = createStore(
    createRootReducer(history, reducers),
    initialState,
    enhancers,
  )

  epicMiddleWare.run(createRootEpic(epics))
  configureHotReload(store, history, epicMiddleWare)
  return store
}
