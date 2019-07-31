import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';

import ConversationMessage from '../ConversationMessage';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    maxHeight: '100%'
  },
  inner: {
    padding: theme.spacing(2)
  }
}));

const ConversationMessages = props => {
  const { messages, className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: 'Shen Zhi',
    slug: 'shen-zhi'
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <PerfectScrollbar>
        <div className={classes.inner}>
          {messages.map(message => {
            const fromUser = message.sender.name === user.name;

            return (
              <ConversationMessage
                fromUser={fromUser}
                key={message.id}
                message={message}
              />
            );
          })}
        </div>
      </PerfectScrollbar>
    </div>
  );
};

ConversationMessages.propTypes = {
  className: PropTypes.string,
  messages: PropTypes.array.isRequired
};

export default ConversationMessages;
