import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, Drawer, Divider, colors } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

import { SidebarNav, Label } from 'common/components';
import { Profile, UpgradePlan } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, onClose, onPricingOpen, variant, className, ...rest } = props;

  const classes = useStyles();

  const [openUpgradePlan, setOpenUpgradePlan] = useState(true);

  const handleUpgradePlanClose = () => {
    setOpenUpgradePlan(false);
  };

  const platformPages = [
    {
      title: 'Home',
      href: '/client/home',
      icon: <HomeIcon />
    },
    {
      title: 'Summary',
      href: '#',
      icon: <BarChartIcon />,
      label: <Label>Comming</Label>
    },
    {
      title: 'Chat',
      href: '/client/chat',
      icon: <ChatIcon />,
      label: (
        <Label
          color={colors.red[600]}
          shape="rounded"
        >
          4
        </Label>
      )
    },
    {
      title: 'Browse Projects',
      href: '/client/projects',
      icon: <FolderIcon />
    },
    {
      title: 'Social Feed',
      href: '/client/social-feed',
      icon: <PeopleIcon />
    }
  ];

  const settingsPages = [
    {
      title: 'Profile',
      href: '/client/profile/user',
      icon: <PersonIcon />
    },
    {
      title: 'Account Settings',
      href: '/client/settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <Typography variant="overline">Platform</Typography>
        <SidebarNav
          className={classes.nav}
          pages={platformPages}
        />
        <Typography variant="overline">Settings</Typography>
        <SidebarNav
          className={classes.nav}
          pages={settingsPages}
        />
        <UpgradePlan
          onClose={handleUpgradePlanClose}
          onUpgrade={onPricingOpen}
          open={openUpgradePlan}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onPricingOpen: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
