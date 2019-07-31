import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, IconButton, colors } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: colors.grey[50]
  },
  header: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'flex-end'
  },
  media: {
    height: 80,
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
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const UpgradePlan = props => {
  const { open, onClose, onUpgrade, className, ...rest } = props;

  const classes = useStyles();

  if (!open) {
    return null;
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.header}>
        <IconButton
          edge="end"
          onClick={onClose}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div className={classes.media}>
        <img
          alt="Upgrade plan"
          src="/images/undraw_resume_folder_2_arse.svg"
        />
      </div>
      <div className={classes.content}>
        <Typography
          align="center"
          gutterBottom
          variant="h6"
        >
          Upgrade Theme
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Upgrade the plan and get ahead of the searches &amp; apply for as many
          projects as you want
        </Typography>
      </div>
      <div className={classes.actions}>
        <Button onClick={onUpgrade}>Upgrade</Button>
      </div>
    </div>
  );
};

UpgradePlan.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onUpgrade: PropTypes.func,
  open: PropTypes.bool
};

export default UpgradePlan;
