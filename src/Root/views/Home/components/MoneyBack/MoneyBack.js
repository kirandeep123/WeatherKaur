import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  inner: {
    padding: theme.spacing(6, 3),
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto'
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const MoneyBack = props => {
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
          variant="h3"
        >
          Satisfaction Guaranteed
        </Typography>
        <Typography
          align="center"
          variant="subtitle2"
        >
          We offer a 30 Day Money Back Guarantee if you’re not satisfied with
          our product. No questions asked!
        </Typography>
        <div className={classes.buttonContainer}>
          <Button
            color="primary"
            component="a"
            href="https://themes.material-ui.com/themes/react-material-kit"
            variant="contained"
          >
            Purchase
          </Button>
        </div>
      </div>
    </div>
  );
};

MoneyBack.propTypes = {
  className: PropTypes.string
};

export default MoneyBack;
