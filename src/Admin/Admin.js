import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from 'common/components';
import { NotFound as NotFoundView } from 'common/views';
import { Minimal as MinimalLayout, Main as MainLayout } from './layouts';
import {
  Home as HomeView,
  Analytics as AnalyticsView,
  Mail as MailView,
  CustomerList as CustomerListView,
  CustomerDetails as CustomerDetailsView,
  OrderList as OrderListView,
  OrderDetails as OrderDetailsView,
  ProjectList as ProjectListView,
  InvoiceDetails as InvoiceDetailsView,
  TeamTasks as TeamTasksView,
  Settings as SettingsView,
  SignIn as SignInView
} from './views';

const Admin = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/admin"
        to="/admin/home"
      />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/admin/home"
      />
      <RouteWithLayout
        component={AnalyticsView}
        exact
        layout={MainLayout}
        path="/admin/analytics"
      />
      <RouteWithLayout
        component={MailView}
        exact
        layout={MainLayout}
        path="/admin/mail"
      />
      <RouteWithLayout
        component={CustomerListView}
        exact
        layout={MainLayout}
        path="/admin/management/customers"
      />
      <Redirect
        exact
        from="/admin/management/customers/:slug"
        to="/admin/management/customers/:slug/summary"
      />
      <RouteWithLayout
        component={CustomerDetailsView}
        exact
        layout={MainLayout}
        path="/admin/management/customers/:slug/:tab"
      />
      <RouteWithLayout
        component={OrderListView}
        exact
        layout={MainLayout}
        path="/admin/management/orders"
      />
      <RouteWithLayout
        component={OrderDetailsView}
        exact
        layout={MainLayout}
        path="/admin/management/orders/:slug"
      />
      <RouteWithLayout
        component={ProjectListView}
        exact
        layout={MainLayout}
        path="/admin/management/projects"
      />
      <RouteWithLayout
        component={InvoiceDetailsView}
        exact
        layout={MainLayout}
        path="/admin/management/invoices/:slug"
      />
      <RouteWithLayout
        component={TeamTasksView}
        exact
        layout={MainLayout}
        path="/admin/team-tasks"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/admin/settings"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/admin/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        layout={MinimalLayout}
      />
    </Switch>
  );
};

export default Admin;
