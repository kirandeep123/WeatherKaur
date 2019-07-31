import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { makeStyles } from '@material-ui/styles';
import { Modal, Paper, Typography, Link, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 420,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: theme.spacing(3),
    outline: 'none'
  },
  media: {
    padding: theme.spacing(1, 2),
    height: 180,
    textAlign: 'center',
    '& > img': {
      height: '100%',
      width: 'auto'
    }
  },
  content: {
    padding: theme.spacing(1, 2)
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1, 2, 2, 1)
  }
}));

const CookiesNotification = props => {
  const { open, onClose, className, ...rest } = props;

  const classes = useStyles();

  const handleClose = () => {
    Cookies.set('devias_consent', 'c1:1|c2:1');
    onClose && onClose();
  };

  return (
    <Modal open={open}>
      <Paper
        {...rest}
        className={clsx(classes.root, className)}
      >
        <div className={classes.media}>
          <img
            alt="Cookies"
            src="/images/undraw_cookie_love_ulvn.svg"
          />
        </div>
        <div className={classes.content}>
          <Typography variant="body1">
            We use CookiesNotification to ensure that we give you the best
            experience on our website. Read our{' '}
            <Link
              className={classes.link}
              component="a"
              href="https://devias.io/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </Link>
            .
          </Typography>
        </div>
        <div className={classes.actions}>
          <Button
            className={classes.agreeButton}
            color="primary"
            onClick={handleClose}
            variant="contained"
          >
            I Agree
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};

CookiesNotification.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

export default CookiesNotification;
