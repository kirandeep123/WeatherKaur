import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';

export default [
  {
    id: uuid(),
    title: 'Mella Full Screen Slider',
    slug: 'mella-full-screen-slider',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    price: '12,500',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [
      {
        text: 'Angular JS',
        color: colors.red[600]
      }
    ],
    updated_at: moment().subtract(24, 'minutes')
  },
  {
    id: uuid(),
    title: 'Dashboard Design',
    slug: 'dashboard-design',
    author: {
      name: 'Emilee Simchenko',
      slug: 'emilee-simchenko',
      avatar: '/images/avatars/avatar_9.png'
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [
      {
        text: 'HTML & CSS',
        color: colors.grey[600]
      }
    ],
    updated_at: moment().subtract(1, 'hour')
  },
  {
    id: uuid(),
    title: 'Ten80 Web Design',
    slug: 'ten80-web-design',
    author: {
      name: 'Kwak Seong-Min',
      slug: 'kwak-seong-min',
      avatar: '/images/avatars/avatar_10.png'
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [
      {
        text: 'React JS',
        color: colors.indigo[600]
      }
    ],
    updated_at: moment().subtract(16, 'hour')
  },
  {
    id: uuid(),
    title: 'Neura e-commerce UI Kit',
    slug: 'neura-e-commerce-ui-kit',
    author: {
      name: 'Shen Zhi',
      slug: 'shen-zhi',
      avatar: '/images/avatars/avatar_11.png'
    },
    price: '12,500',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [
      {
        text: 'Vue JS',
        color: colors.green[600]
      }
    ],
    updated_at: moment().subtract(3, 'days')
  },
  {
    id: uuid(),
    title: 'Administrator Dashboard',
    slug: 'administrator-dashboard',
    author: {
      name: 'Cao Yu',
      slug: 'cao-yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [
      {
        text: 'Angular JS',
        color: colors.red[600]
      },
      {
        text: 'HTML & CSS',
        color: colors.grey[600]
      }
    ],
    updated_at: moment().subtract(7, 'days')
  },
  {
    id: uuid(),
    title: 'Kalli UI Kit',
    slug: 'kalli-ui-kit',
    author: {
      name: 'Anje Keizer',
      slug: 'anje-keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [
      {
        text: 'Vue JS',
        color: colors.green[600]
      }
    ],
    updated_at: moment().subtract(8, 'days')
  }
];
