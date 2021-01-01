import { ActionType } from 'typesafe-actions'
import { routerActions } from 'connected-react-router'

export const rootActionCreator = (actions: {}) => ({
  ...actions,
  router: routerActions,
})

export type RootAction = ActionType<ReturnType<typeof rootActionCreator>>
