import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Typography
} from '@material-ui/core';

import { StatusBullet } from 'common/components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white
  },
  list: {
    padding: theme.spacing(1, 3)
  },
  listItemText: {
    marginRight: theme.spacing(1)
  },
  lastActivity: {
    whiteSpace: 'nowrap'
  }
}));

const Connections = props => {
  const { open, onClose, variant, className, ...rest } = props;

  const classes = useStyles();
  const [data] = useState(mockData);

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        {data.groups.map(group => (
          <List
            className={classes.list}
            key={group.id}
            subheader={
              <ListSubheader
                disableGutters
                disableSticky
              >
                {group.name}
              </ListSubheader>
            }
          >
            {data.connections
              .filter(connection => group.id === connection.group)
              .map(connection => (
                <ListItem
                  disableGutters
                  key={connection.id}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt="Person"
                      component={RouterLink}
                      src={connection.avatar}
                      to={`/client/profile/${connection.slug}`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    className={classes.listItemText}
                    disableTypography
                    primary={
                      <Typography
                        component={RouterLink}
                        display="block"
                        noWrap
                        to={`/client/profile/${connection.slug}`}
                        variant="h6"
                      >
                        {connection.name}
                      </Typography>
                    }
                  />
                  {connection.active ? (
                    <StatusBullet
                      color="success"
                      size="small"
                    />
                  ) : (
                    <Typography
                      className={classes.lastActivity}
                      variant="body2"
                    >
                      {moment(connection.lastActivity).fromNow()}
                    </Typography>
                  )}
                </ListItem>
              ))}
          </List>
        ))}
      </div>
    </Drawer>
  );
};

Connections.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Connections;
