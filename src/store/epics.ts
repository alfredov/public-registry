import { combineEpics } from 'redux-observable'

export const createRootEpic = (epics: any[]) => combineEpics(...epics)
