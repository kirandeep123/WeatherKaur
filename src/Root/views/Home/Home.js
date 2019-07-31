import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Header,
  Apps,
  FAQ,
  Features,
  MoneyBack,
  PluginsSupport,
  SourceFiles,
  Previews,
  UserFlows
} from './components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Apps />
      <UserFlows />
      <PluginsSupport />
      <SourceFiles />
      <Previews />
      <Features />
      <MoneyBack />
      <FAQ />
    </div>
  );
};

export default Home;
