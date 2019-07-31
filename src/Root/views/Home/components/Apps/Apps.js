import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  inner: {
    padding: theme.spacing(6, 3),
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto'
  },
  content: {
    marginTop: theme.spacing(6)
  },
  media: {
    width: '100%',
    height: 'auto'
  },
  details: {
    marginTop: theme.spacing(2)
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Apps = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.inner}>
        <Typography
          align="center"
          gutterBottom
          variant="h2"
        >
          Two different applications
        </Typography>
        <Typography
          align="center"
          component="h3"
          variant="subtitle2"
        >
          The kit includes two unique layouts, client and back-office which
          comes with their own light functionalities
        </Typography>
        <Grid
          alignItems="center"
          className={classes.content}
          container
          spacing={6}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <Paper elevation={1}>
              <img
                alt="Client Platform"
                className={classes.media}
                src="/images/home/client_app.png"
              />
            </Paper>
            <div className={classes.details}>
              <Typography
                align="center"
                gutterBottom
                variant="h3"
              >
                Client Platform
              </Typography>
              <div className={classes.buttonContainer}>
                <Button
                  component={RouterLink}
                  to="/client"
                  variant="outlined"
                >
                  Go to demo
                </Button>
              </div>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Paper elevation={1}>
              <img
                alt="Admin Platform"
                className={classes.media}
                src="/images/home/admin_app.png"
              />
            </Paper>
            <div className={classes.details}>
              <Typography
                align="center"
                gutterBottom
                variant="h3"
              >
                Admin Platform
              </Typography>
              <div className={classes.buttonContainer}>
                <Button
                  component={RouterLink}
                  to="/admin"
                  variant="outlined"
                >
                  Go to demo
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Apps.propTypes = {
  className: PropTypes.string
};

export default Apps;
