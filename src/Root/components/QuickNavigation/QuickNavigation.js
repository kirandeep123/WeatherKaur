import React, { Fragment, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Fab, Menu, MenuItem, ListItemText } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/AppsOutlined';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    color: theme.palette.white,
    backgroundColor: theme.palette.black,
    bottom: 24,
    right: 24,
    zIndex: theme.zIndex.appBar + 2,
    '&:hover': {
      backgroundColor: theme.palette.text.primary
    }
  },
  menuItem: {
    justifyContent: 'space-between'
  },
  openInNewIcon: {
    marginLeft: theme.spacing(2)
  }
}));

const QuickNavigation = () => {
  const classes = useStyles();

  const fabRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Fab
        className={classes.fab}
        onClick={handleMenuOpen}
        ref={fabRef}
        size="small"
      >
        <AppsIcon />
      </Fab>
      <Menu
        anchorEl={fabRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        onClose={handleMenuClose}
        open={open}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <MenuItem
          className={classes.menuItem}
          component={RouterLink}
          divider
          onClick={handleMenuClose}
          to="/"
        >
          <ListItemText primary="Home" />
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component={RouterLink}
          divider
          onClick={handleMenuClose}
          to="/client"
        >
          <ListItemText primary="Client Platform" />
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component={RouterLink}
          divider
          onClick={handleMenuClose}
          to="/admin"
        >
          <ListItemText primary="Admin Platform" />
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

QuickNavigation.propTypes = {};

export default QuickNavigation;
