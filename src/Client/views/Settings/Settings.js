import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'common/components';
import { useRouter } from 'common/hooks';
import { Header, General, Subscription, Security } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const Settings = () => {
  const classes = useStyles();

  const router = useRouter();

  const handleTabsChange = (event, data) => {
    router.history.push(data);
  };

  const tab = router.match.params.tab;

  const tabs = [
    { value: 'general', label: 'General' },
    { value: 'subscription', label: 'Subscription' },
    { value: 'security', label: 'security' }
  ];

  return (
    <Page title="Client - Settings">
      <div className={classes.root}>
        <Header />
        <Tabs
          className={classes.tabs}
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={tab}
          variant="scrollable"
        >
          {tabs.map(tab => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        <div className={classes.content}>
          {tab === 'general' && <General />}
          {tab === 'subscription' && <Subscription />}
          {tab === 'security' && <Security />}
        </div>
      </div>
    </Page>
  );
};

export default Settings;
