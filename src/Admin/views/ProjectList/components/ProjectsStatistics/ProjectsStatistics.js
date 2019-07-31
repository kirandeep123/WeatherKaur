import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProjectsStatistics = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>item</Grid>
      </Grid>
    </div>
  );
};

ProjectsStatistics.propTypes = {
  className: PropTypes.string
};

export default ProjectsStatistics;
