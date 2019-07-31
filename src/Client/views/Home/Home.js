import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'common/components';
import {
  Header,
  Statistics,
  Notifications,
  Projects,
  Todos
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  statistics: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(6)
  },
  projects: {
    marginTop: theme.spacing(6)
  },
  todos: {
    marginTop: theme.spacing(6)
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Page title="Client - Home">
      <div className={classes.root}>
        <Header />
      </div>
    </Page>
  );
};

export default Home;
