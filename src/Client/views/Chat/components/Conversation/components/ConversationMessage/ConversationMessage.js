import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Avatar, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  fromUser: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& $body': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }
  },
  inner: {
    display: 'flex',
    maxWidth: 500
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  body: {
    backgroundColor: colors.grey[100],
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 2)
  },
  content: {
    marginTop: theme.spacing(1)
  },
  image: {
    marginTop: theme.spacing(2),
    height: 'auto',
    width: 380,
    maxWidth: '100%'
  },
  footer: {
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const ConversationMessage = props => {
  const { message, fromUser, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(
        classes.root,
        {
          [classes.fromUser]: fromUser
        },
        className
      )}
    >
      <div className={classes.inner}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={message.sender.avatar}
          to={`/client/profile/${message.sender.slug}`}
        />
        <div>
          <div className={classes.body}>
            <div>
              <Link
                color="inherit"
                component={RouterLink}
                to={`/client/profile/${message.sender.slug}`}
                variant="h6"
              >
                {fromUser ? 'Me' : message.sender.name}
              </Link>
            </div>
            <div className={classes.content}>
              {message.contentType === 'image' ? (
                <img
                  alt="Attachment"
                  className={classes.image}
                  src={message.content}
                />
              ) : (
                <Typography
                  color="inherit"
                  variant="body1"
                >
                  {message.content}
                </Typography>
              )}
            </div>
          </div>
          <div className={classes.footer}>
            <Typography
              className={classes.time}
              variant="body2"
            >
              {moment(message.created_at).fromNow()}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

ConversationMessage.propTypes = {
  className: PropTypes.string,
  fromUser: PropTypes.bool.isRequired,
  message: PropTypes.object.isRequired
};

export default ConversationMessage;
