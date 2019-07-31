import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from 'common/components';
import { NotFound as NotFoundView } from 'common/views';
import { Minimal as MinimalLayout, Main as MainLayout } from './layouts';
import {
  Home as HomeView,
  Settings as SettingsView,
} from './views';

const Client = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/client"
        to="/client/home"
      />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/client/home"
      />
      
      <RouteWithLayout
        component={NotFoundView}
        layout={MinimalLayout}
      />
    </Switch>
  );
};

export default Client;
