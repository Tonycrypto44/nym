import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/">
      <div>Root</div>
    </Route>
  </Switch>
);
