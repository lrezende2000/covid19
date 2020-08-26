import React, { memo } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Graphics from './containers/Graphics';
import Main from './containers/Main';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/graphics" component={Graphics} />
      </Switch>
    </BrowserRouter>
  );
}

export default memo(Routes);
