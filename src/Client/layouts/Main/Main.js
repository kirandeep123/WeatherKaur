import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import { useRouter } from 'common/hooks';
import {  Topbar, Pricing } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240,
    paddingRight: 240
  },
  paper: {},
  content: {
    height: '100%'
  }
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);
  const [openConnections, setOpenConnections] = useState(false);
  const [openPricing, setOpenPricing] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setOpenSidebar(false);
  }, [router.location.pathname]);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const handleConnectionsOpen = () => {
    setOpenConnections(true);
  };

  const handleConnectionsClose = () => {
    setOpenConnections(false);
  };

  const handlePricingOpen = () => {
    setOpenPricing(true);
  };

  const handlePricingClose = () => {
    setOpenPricing(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;
  const shouldOpenConnections = isDesktop ? true : openConnections;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar
        onConnectionsOpen={handleConnectionsOpen}
        onPricingOpen={handlePricingOpen}
        onSidebarOpen={handleSidebarOpen}
      />
      {/* <Sidebar
        onClose={handleSidebarClose}
        onPricingOpen={handlePricingOpen}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      /> */}
      {/* <Connections
        onClose={handleConnectionsClose}
        open={shouldOpenConnections}
        variant={isDesktop ? 'persistent' : 'temporary'}
      /> */}
      <main className={classes.content}>{children}</main>
      <Pricing
        onClose={handlePricingClose}
        open={openPricing}
      />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Main;
