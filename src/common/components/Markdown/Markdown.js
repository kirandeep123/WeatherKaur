import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles(theme => ({
  root: {
    '& h1': {
      ...theme.typography.h1,
      marginBottom: theme.spacing(1)
    },
    '& h2': {
      ...theme.typography.h2,
      marginBottom: theme.spacing(1)
    },
    '& h3': {
      ...theme.typography.h3,
      marginBottom: theme.spacing(1)
    },
    '& h4': {
      ...theme.typography.h4,
      marginBottom: theme.spacing(1)
    },
    '& h5': {
      ...theme.typography.h5,
      marginBottom: theme.spacing(1)
    },
    '& h6': {
      ...theme.typography.h6,
      marginBottom: theme.spacing(1)
    },
    '& p': {
      ...theme.typography.body1,
      marginBottom: theme.spacing(2)
    },
    '& ul': {
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(2)
    },
    '& li': {
      ...theme.typography.body1,
      marginBottom: theme.spacing(1)
    }
  }
}));

const Markdown = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <ReactMarkdown {...rest} />
    </div>
  );
};

Markdown.propTypes = {
  className: PropTypes.string
};

export default Markdown;
