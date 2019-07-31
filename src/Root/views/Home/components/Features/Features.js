import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  inner: {
    padding: theme.spacing(6, 3),
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto'
  },
  content: {
    marginTop: theme.spacing(6)
  }
}));

function chunk(array, size) {
  const chunked_arr = [];

  for (let i = 0; i < array.length; i++) {
    const last = chunked_arr[chunked_arr.length - 1];

    if (!last || last.length === size) {
      chunked_arr.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }

  return chunked_arr;
}

const Features = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const features = [
    'Dashboard Overview',
    'Analytics Dashboard',
    'Mail Client',
    'Users Management',
    'User Details',
    'User Edit',
    'User Invoices',
    'User Logs',
    'Orders View',
    'Projects View',
    'Account Settings Page',
    'Team Tasks Kanban',
    'Sign In Page',
    'User Overview',
    'Chat Application',
    'Projects Directory Page',
    'Project Details',
    'Project Files',
    'Project Activity',
    'Project Subscribers',
    'Social Feed Page',
    'Chat Application',
    'User Timeline',
    'User Connections',
    'User Reviews',
    'User Settings',
    'User Register & Login',
    'Made with React Hooks',
    'Excellent Code Quality',
    '6 Months of Updates & Premium Support'
  ];

  const chunks = chunk(features, 8);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.inner}>
        <Typography
          align="center"
          gutterBottom
          variant="h3"
        >
          Full List of Features
        </Typography>
        <Typography
          align="center"
          className={classes.subtitle}
          variant="subtitle2"
        >
          Here’s an extensive list with all the features
        </Typography>
        <Grid
          className={classes.content}
          container
        >
          {chunks.map(chunk => (
            <Grid
              item
              key={uuid()}
              md={3}
              xs={12}
            >
              <List disablePadding>
                {chunk.map(feature => (
                  <ListItem key={feature}>
                    <ListItemText
                      primary={feature}
                      primaryTypographyProps={{ color: 'textSecondary' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

Features.propTypes = {
  className: PropTypes.string
};

export default Features;
