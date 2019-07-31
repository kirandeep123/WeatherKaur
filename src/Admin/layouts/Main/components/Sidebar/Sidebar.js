import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, Divider, Drawer, Link } from '@material-ui/core';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MailIcon from '@material-ui/icons/MailOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

import { Label, SidebarNav } from 'common/components';
import { Profile } from './components';

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
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  },
  copyright: {
    marginTop: 'auto',
    padding: theme.spacing(2, 0)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const platformPages = [
    {
      title: 'Home',
      href: '/admin/home',
      icon: <HomeIcon />
    },
    {
      title: 'Analytics',
      href: '/admin/analytics',
      icon: <DashboardIcon />
    },
    {
      title: 'Mail',
      href: '/admin/mail',
      icon: <MailIcon />
    },
    {
      title: 'Management',
      href: '/admin/management',
      icon: <InsertChartIcon />,
      children: [
        {
          title: 'Customers',
          href: '/admin/management/customers',
          icon: <PeopleIcon />
        },
        {
          title: 'Orders',
          href: '/admin/management/orders',
          icon: <ReceiptIcon />
        },
        {
          title: 'Projects',
          href: '/admin/management/projects',
          icon: <FolderIcon />
        }
      ]
    },
    {
      title: 'Settings',
      href: '/admin/settings',
      icon: <SettingsIcon />
    }
  ];

  const oragnizationPages = [
    {
      title: 'Calendar',
      href: '#',
      icon: <CalendarIcon />,
      label: <Label>Comming</Label>
    },
    {
      title: 'Team tasks',
      href: '/admin/team-tasks',
      icon: <ListAltIcon />
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
        <Typography variant="overline">Organization</Typography>
        <SidebarNav
          className={classes.nav}
          pages={oragnizationPages}
        />
        <div className={classes.copyright}>
          <Typography variant="subtitle2">
            ©{' '}
            <Link
              color="textPrimary"
              component="a"
              href="https://devias.io/"
              target="_blank"
              underline="always"
            >
              Devias.io
            </Link>{' '}
            Team 2019
          </Typography>
          <Typography variant="body2">
            Created with love for the environment. By designers and develodivers
            who love to work together in offices!
          </Typography>
        </div>
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
