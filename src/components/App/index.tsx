import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createHashHistory } from 'history'

import Routes from '../Routes'
import setupTranslation from '../../i18n/setup'
import setupStore from '../../store/setup'
import { rootActionCreator } from '../../store/actions'
import { TRoute } from '../../schemas'

type Props = {
  actions: {},
  reducers: any[],
  epics: any[],
  routes: TRoute[],
}

export const App: React.FC<Props> = ({ actions, reducers, epics, routes }) => {
  setupTranslation()
  rootActionCreator(actions)
  const history = createHashHistory()
  const store = setupStore(history, reducers, epics)
  return (
    <Provider store={store} >
      <ConnectedRouter history={history}>
        <Routes routes={routes} />
      </ConnectedRouter>
    </Provider>
  )
}
