/* eslint-disable react/no-multi-comp */
import React from 'react';
import { matchPath } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List } from '@material-ui/core';

import { useRouter } from 'common/hooks';
import { SidebarNavItem } from './components';

const useStyles = makeStyles(() => ({
  root: {}
}));

function renderItems(props) {
  // eslint-disable-next-line react/prop-types
  const { pages, ...rest } = props;

  return (
    <List>
      {pages.reduce(
        (items, page) => reduceChildRoutes({ items, page, ...rest }),
        []
      )}
    </List>
  );
}

const reduceChildRoutes = props => {
  const { router, items, page, depth, disableIcons } = props;

  if (page.children) {
    const open = matchPath(router.match.path, {
      path: page.href
    });

    items.push(
      <SidebarNavItem
        depth={depth}
        disableIcon={disableIcons}
        icon={page.icon}
        key={page.title}
        label={page.label}
        open={Boolean(open)}
        title={page.title}
      >
        {renderItems({
          router,
          pages: page.children,
          depth: depth + 1,
          disableIcons
        })}
      </SidebarNavItem>
    );
  } else {
    items.push(
      <SidebarNavItem
        depth={depth}
        disableIcon={disableIcons}
        href={page.href}
        icon={page.icon}
        key={page.title}
        label={page.label}
        title={page.title}
      />
    );
  }

  return items;
};

const SidebarNav = props => {
  const { pages, disableIcons, className, ...rest } = props;

  const classes = useStyles();

  const router = useRouter();

  return (
    <nav
      {...rest}
      className={clsx(classes.root, className)}
    >
      {renderItems({ router, pages, depth: 0, disableIcons })}
    </nav>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  disableIcons: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired
};

SidebarNav.defaultProps = {
  disableIcons: false
};

export default SidebarNav;
