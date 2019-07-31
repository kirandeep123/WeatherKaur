import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'common/components';
import { useRouter } from 'common/hooks';
import { Header, Timeline, Connections, Projects, Reviews } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  inner: {
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const Profile = () => {
  const classes = useStyles();

  const router = useRouter();

  const handleTabsChange = (event, data) => {
    router.history.push(data);
  };

  const tab = router.match.params.tab;

  const tabs = [
    { value: 'timeline', label: 'Timeline' },
    { value: 'connections', label: 'Connections' },
    { value: 'projects', label: 'Projects' },
    { value: 'reviews', label: 'Reviews' }
  ];

  return (
    <Page title="Client - Profile">
      <div className={classes.root}>
        <Header />
        <div className={classes.inner}>
          <Tabs
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
            {tab === 'timeline' && <Timeline />}
            {tab === 'connections' && <Connections />}
            {tab === 'projects' && <Projects />}
            {tab === 'reviews' && <Reviews />}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Profile;
