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
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';

import { useRouter } from 'common/hooks';
import { Notifications } from 'common/components';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
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
  const { onSidebarOpen, className, ...rest } = props;

  const classes = useStyles();
  const { history } = useRouter();
  const notificationsRef = useRef(null);

  const [openNotifications, setOpenNotifications] = useState(false);
  const notifications = [];

  const handleSignOut = () => {
    history.push('/admin/sign-in');
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
        <RouterLink to="/admin">
          <img
            alt="Logo"
            src="/images/logos/admin_white_full.svg"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
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
  onSidebarOpen: PropTypes.func
};

Topbar.defaultProps = {
  onSidebarOpen: () => {}
};

export default Topbar;
