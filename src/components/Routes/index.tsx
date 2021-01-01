
import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import Site from '../../screens/Site'
import { TRoute } from '../../schemas'

const NotFoundPage = lazy(() => import(/* webpackChunkName: 'app-core' */ '../../screens/NotFound'))

type Props = {
  routes: TRoute[],
}

const Routes: React.FC<Props> = ({ routes }) => (
  <Site>
    <Suspense fallback={<h3>Loading...</h3>}>
      <Switch>
        {routes.map(route =>
          <Route
            exact
            component={route.component}
            key={route.path}
            path={route.path}
          />,
        )}

        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </Site>
)

export default Routes
