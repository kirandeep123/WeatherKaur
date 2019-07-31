import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import Cookies from 'js-cookie';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { NotFound as NotFoundView } from 'common/views';
import theme from './theme';
import './configs';
import { Home as HomeView } from './views';
import {
  GoogleAnalytics,
  ScrollToTop,
  QuickNavigation,
  CookiesNotification
} from './components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import Client from '../Client';
import Admin from '../Admin';

const history = createBrowserHistory();

const Root = () => {
  const [openCookies, setOpenCookies] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('devias_consent');

    if (!consent) {
      setOpenCookies(true);
    }
  }, []);

  const handleCookiesClose = () => {
    setOpenCookies(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Router history={history}>
          <GoogleAnalytics />
          <ScrollToTop />
          <QuickNavigation />
          <CookiesNotification
            onClose={handleCookiesClose}
            open={openCookies}
          />
          <Switch>
            <Route
              component={HomeView}
              exact
              path="/"
            />
            <Route
              component={Client}
              path="/client"
            />
            <Route
              component={Admin}
              path="/admin"
            />
            <Route component={NotFoundView} />
          </Switch>
        </Router>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default Root;
