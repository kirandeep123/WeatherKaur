import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
  Button,
  colors
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutlineOutlined';

import { Page } from 'common/components';
import gradients from 'common/gradients';
import { SignInForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
  },
  card: {
    maxWidth: theme.breakpoints.values.md,
    overflow: 'unset',
    display: 'flex',
    position: 'relative'
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  peopleIcon: {
    backgroundImage: gradients.green,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  githubButton: {
    marginTop: theme.spacing(2),
    backgroundColor: colors.blueGrey[900],
    color: theme.palette.white,
    '&:hover': {
      backgroundColor: colors.blueGrey[900]
    }
  },
  signInForm: {
    marginTop: theme.spacing(3)
  }
}));

const SignIn = () => {
  const classes = useStyles();

  return (
    <Page title="Admin - Sign In">
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <PeopleIcon className={classes.peopleIcon} />
            <Typography
              gutterBottom
              variant="h3"
            >
              Admin Dashboard Access
            </Typography>
            <Typography variant="subtitle2">
              Sign in on the internal platform
            </Typography>
            <Button
              className={classes.githubButton}
              fullWidth
              variant="contained"
            >
              Login with GitHub
            </Button>
            <SignInForm className={classes.signInForm} />
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default SignIn;
