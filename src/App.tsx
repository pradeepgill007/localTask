/**
 * @desc this is the component for the routing of the application with react router
 * @author Pradeep Gill pradeepgill713@gmail.com
 */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/';
import Home from './components/home/';
import Loading from './util/loader/';

// load component when required
const PageNotFound = React.lazy(() => import('./components/404page'));

function App() {
  return (
    // Application router
    <BrowserRouter>
      <Header />
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
