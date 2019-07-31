import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'common/components';
import { Header, Notifications, Password } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(3)
  },
  password: {
    marginTop: theme.spacing(3)
  }
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <Page title="Admin - Settings">
      <div className={classes.root}>
        <Header />
        <Notifications className={classes.notifications} />
        <Password className={classes.password} />
      </div>
    </Page>
  );
};

export default Settings;
