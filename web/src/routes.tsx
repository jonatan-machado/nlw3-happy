import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './Pages/Landing';
import OrphanagesMap from './Pages/OrphanagesMaps';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/app' component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
