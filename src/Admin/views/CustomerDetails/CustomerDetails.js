import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'common/components';
import { useRouter } from 'common/hooks';
import { Header, Summary, Invoices, Logs } from './components';

const useStyles = makeStyles(theme => ({
  root: {
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

const CustomerDetails = () => {
  const classes = useStyles();

  const router = useRouter();

  const handleTabsChange = (event, customer) => {
    router.history.push(customer);
  };

  const tab = router.match.params.tab;

  const tabs = [
    { value: 'summary', label: 'Summary' },
    { value: 'invoices', label: 'Invoices' },
    { value: 'logs', label: 'Logs' }
  ];

  return (
    <Page title="Admin - Customer Details">
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
          {tab === 'summary' && <Summary />}
          {tab === 'invoices' && <Invoices />}
          {tab === 'logs' && <Logs />}
        </div>
      </div>
    </Page>
  );
};

export default CustomerDetails;
