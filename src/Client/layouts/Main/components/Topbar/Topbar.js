import React, { useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  colors
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/PeopleOutline';

import { useRouter } from 'common/hooks';
import { Notifications } from 'common/components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  trialButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  trialIcon: {
    marginRight: theme.spacing(1)
  },
  notificationsButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600]
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  signOutIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Topbar = props => {
  const {
    onSidebarOpen,
    onConnectionsOpen,
    onPricingOpen,
    className,
    ...rest
  } = props;

  const classes = useStyles();
  const { history } = useRouter();
  const notificationsRef = useRef(null);

  const [notifications] = useState(mockData.notifications);
  const [openNotifications, setOpenNotifications] = useState(false);

  const handleSignOut = () => {
    history.push('/client/sign-up');
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <RouterLink to="/client">
          <img
            alt="Logo"
            src="/images/logos/client_white_full.svg"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden smDown>
          <Button
            className={classes.trialButton}
            onClick={onPricingOpen}
            variant="contained"
          >
            <LockIcon className={classes.trialIcon} />
            Trial expired
          </Button>
        </Hidden>
        <Hidden mdDown>
          <IconButton
            className={classes.notificationsButton}
            color="inherit"
            onClick={handleNotificationsOpen}
            ref={notificationsRef}
          >
            <Badge
              badgeContent={notifications.length}
              classes={{ badge: classes.notificationsBadge }}
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button
            className={classes.signOutButton}
            color="inherit"
            onClick={handleSignOut}
          >
            <InputIcon className={classes.signOutIcon} />
            Sign out
          </Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onConnectionsOpen}
          >
            <PeopleIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Notifications
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      />
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onConnectionsOpen: PropTypes.func,
  onPricingOpen: PropTypes.func,
  onSidebarOpen: PropTypes.func
};

Topbar.defaultProps = {
  onSidebarOpen: () => {},
  onConnectionsOpen: () => {},
  onPricingOpen: () => {}
};

export default Topbar;
