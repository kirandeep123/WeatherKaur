import uuid from 'uuid/v1';
import { colors } from '@material-ui/core';

export default [
  {
    id: uuid(),
    title: 'Mella Full Screen Slider',
    slug: 'mella-full-screen-slider',
    price: '12,500',
    currency: '$',
    author: {
      name: 'Anje Keizer',
      slug: 'anje-keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    tags: [
      {
        text: 'Angular JS',
        color: colors.red[600]
      }
    ]
  },
  {
    id: uuid(),
    title: 'Dashboard Design',
    slug: 'dashboard-design',
    price: '15,750',
    currency: '$',
    author: {
      name: 'Emilee Simchenko',
      slug: 'emilee-simchenko',
      avatar: '/images/avatars/avatar_9.png'
    },
    tags: [
      {
        text: 'HTML & CSS',
        color: colors.grey[600]
      }
    ]
  },
  {
    id: uuid(),
    title: 'Ten80 Web Design',
    slug: 'ten80-web-design',
    price: '15,750',
    currency: '$',
    author: {
      name: 'Kwak Seong-Min',
      slug: 'kwak-seong-min',
      avatar: '/images/avatars/avatar_10.png'
    },
    tags: [
      {
        text: 'React JS',
        color: colors.indigo[600]
      }
    ]
  },
  {
    id: uuid(),
    title: 'Neura e-commerce UI Kit',
    slug: 'neura-e-commerce-ui-kit',
    price: '12,500',
    currency: '$',
    author: {
      name: 'Shen Zhi',
      slug: 'shen-zhi',
      avatar: '/images/avatars/avatar_11.png'
    },
    tags: [
      {
        text: 'Vue JS',
        color: colors.green[600]
      }
    ]
  },
  {
    id: uuid(),
    title: 'Administrator Dashboard',
    slug: 'administrator-dashboard',
    price: '15,750',
    currency: '$',
    author: {
      name: 'Cao Yu',
      slug: 'cao-yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    tags: [
      {
        text: 'Angular JS',
        color: colors.red[600]
      }
    ]
  }
];
