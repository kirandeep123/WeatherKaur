import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  header: {
    maxWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    padding: '80px 24px',
    [theme.breakpoints.up('md')]: {
      padding: '160px 24px'
    }
  },
  buttons: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(-1),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    },
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  mediaContainer: {
    margin: '0 auto',
    maxWidth: 1600,
    padding: theme.spacing(0, 2),
    overflow: 'hidden'
  },
  media: {
    width: '100%'
  },
  stats: {
    backgroundColor: colors.blueGrey[800],
    color: theme.palette.white,
    padding: theme.spacing(3)
  },
  statsInner: {
    maxWidth: theme.breakpoints.values.md,
    margin: '0 auto'
  },
  statsItemTitle: {
    color: theme.palette.white
  },
  statsItemDesc: {
    color: colors.blueGrey[300]
  }
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.header}>
        <Typography
          align="center"
          gutterBottom
          variant="h1"
        >
          React Material Kit
        </Typography>
        <Typography
          align="center"
          component="h2"
          variant="subtitle1"
        >
          A professional kit that comes with ready-to-use Material-UI©
          components developed with one common goal in mind, help you build
          faster &amp; beautiful applications. Each component is fully
          customizable, responsive and easy to integrate.
        </Typography>
        <div className={classes.buttons}>
          <Button
            color="primary"
            component="a"
            href="https://themes.material-ui.com/themes/react-material-kit"
            variant="contained"
          >
            Purchase Kit
          </Button>
          <Button
            color="primary"
            component={RouterLink}
            to="/client"
            variant="outlined"
          >
            Client side
          </Button>
          <Button
            color="primary"
            component={RouterLink}
            to="/admin"
            variant="outlined"
          >
            Admin dashboard
          </Button>
        </div>
      </div>
      <div className={classes.mediaContainer}>
        <img
          alt="Demos"
          className={classes.media}
          src="/images/home/header.jpg"
        />
      </div>
      <div className={classes.stats}>
        <Grid
          alignItems="center"
          className={classes.statsInner}
          container
          justify="center"
          spacing={3}
        >
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              className={classes.statsItemTitle}
              gutterBottom
              variant="h3"
            >
              30+
            </Typography>
            <Typography
              className={classes.statsItemDesc}
              variant="body2"
            >
              Demo Pages
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              className={classes.statsItemTitle}
              gutterBottom
              variant="h3"
            >
              UX
            </Typography>
            <Typography
              className={classes.statsItemDesc}
              variant="body2"
            >
              Complete Flows
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              className={classes.statsItemTitle}
              gutterBottom
              variant="h3"
            >
              300+
            </Typography>
            <Typography
              className={classes.statsItemDesc}
              variant="body2"
            >
              Components
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <div>
              <img
                alt="React"
                src="/images/react.png"
              />
            </div>
            <Typography
              className={classes.statsItemDesc}
              variant="body2"
            >
              React Hooks API
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
