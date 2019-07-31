/* eslint-disable react/no-multi-comp */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, Paper, Grid } from '@material-ui/core';

const useStyles1 = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  inner: {
    padding: theme.spacing(10, 3),
    maxWidth: theme.breakpoints.values.xl,
    margin: '0 auto'
  },
  previewGroup: {
    '& + &': {
      marginTop: 100
    }
  }
}));

const useStyles2 = makeStyles(theme => ({
  root: {},
  content: {
    padding: theme.spacing(3)
  },
  mediaContainer: {
    maxWidth: 500,
    height: 240,
    overflow: 'hidden',
    margin: '0 auto'
  },
  media: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto'
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const clientImages = [
  '0-1-1 Sign up form.jpg',
  '1-1-1 Overview.jpg',
  '2-1-1 Account Setttings-Subscription.jpg',
  '2-1-1 Account Setttings.jpg',
  '3-1-1 Profile.jpg',
  '3-2-1 Profile-Connections.jpg',
  '3-3-1 Profile-Projects.jpg',
  '3-3-1 Profile-Reviews.jpg',
  '5-1-1 Projects.jpg',
  '5-1-2 Projects-List.jpg',
  '5-2-1 Projects Details.jpg',
  '5-2-1 Projects-Files.jpg',
  '5-3-1 Projects-Activity.jpg',
  '5-3-1 Projects-Subscribers.jpg',
  '6-1-1 Social Feed.jpg',
  '7-1-1 Messaging.jpg',
  '7-1-2 Messaging-Empty.jpg'
];

const adminImages = [
  '0-1-1 Sign Up.jpg',
  '1-1-1 Dashboard.jpg',
  '2-1-1 Analytics-Overview.jpg',
  '2-1-1 Manage-Users.jpg',
  '2-2-1 Manage-Users.jpg',
  '2-2-2 Manage-Users-Selected-Edit.jpg',
  '2-3-1 Manage-Users-Invoices.jpg',
  '2-4-1 Manage-Invoice.jpg',
  '2-5-1 Manage-Users-Logs.jpg',
  '3-1-1 Manage-Orders.jpg',
  '3-2-1 Manage-Orders.jpg',
  '3-2-2 Manage-Orders-Dialog.jpg',
  '5-1-1 Organization-Kanban.jpg',
  '7-1-1 Projects.jpg',
  '7-1-2 Projects-Filters.jpg',
  '8-1-1 Mail.jpg',
  '8-2-1 Mail-Message.jpg'
];

const PreviewGroup = props => {
  const { title, images, folder, className, ...rest } = props;

  const classes = useStyles2();

  const [loadedImages, setLoadedImages] = useState([...images].splice(0, 6));

  const handleLoadMore = () => {
    setLoadedImages(loadedImages => {
      const newImages = [...images].splice(loadedImages.length, 6);

      return [...loadedImages, ...newImages];
    });
  };

  const showLoadMore = images.length !== loadedImages.length;

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.heading}>
        <Typography
          align="center"
          variant="h3"
        >
          {title}
        </Typography>
      </div>
      <div className={classes.content} />
      <Grid
        container
        spacing={3}
      >
        {loadedImages.map(image => (
          <Grid
            item
            key={uuid()}
            lg={4}
            md={6}
            xs={12}
          >
            <Paper
              className={classes.mediaContainer}
              elevation={1}
            >
              <img
                alt={image}
                className={classes.media}
                src={`/images/home/previews/${folder}/${image}`}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
      {showLoadMore && (
        <div className={classes.buttonContainer}>
          <Button
            color="primary"
            onClick={() => handleLoadMore('client')}
            variant="outlined"
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

PreviewGroup.propTypes = {
  className: PropTypes.string,
  folder: PropTypes.string,
  images: PropTypes.array,
  title: PropTypes.string
};

const Previews = props => {
  const { className, ...rest } = props;

  const classes = useStyles1();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.inner}>
        <PreviewGroup
          className={classes.previewGroup}
          folder="client"
          images={clientImages}
          title="Client Platform"
        />
        <PreviewGroup
          className={classes.previewGroup}
          folder="admin"
          images={adminImages}
          title="Admin Platform"
        />
      </div>
    </div>
  );
};

Previews.propTypes = {
  className: PropTypes.string
};

export default Previews;
