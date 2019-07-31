import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    title: 'Mella Full Screen Slider',
    slug: 'mella-full-screen-slider',
    price: '12,500',
    currency: '$',
    start_date: moment(),
    end_date: moment(),
    status: 'In progress',
    author: {
      name: 'Anje Keizer',
      slug: 'anje-keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    members: 5
  },
  {
    id: uuid(),
    title: 'Dashboard Design',
    slug: 'dashboard-design',
    price: '15,750',
    currency: '$',
    start_date: moment(),
    end_date: moment(),
    status: 'In progress',
    author: {
      name: 'Emilee Simchenko',
      slug: 'emilee-simchenko',
      avatar: '/images/avatars/avatar_9.png'
    },
    members: 3
  },
  {
    id: uuid(),
    title: 'Ten80 Web Design',
    slug: 'ten80-web-design',
    price: '15,750',
    currency: '$',
    start_date: moment(),
    end_date: moment(),
    status: 'Completed',
    author: {
      name: 'Kwak Seong-Min',
      slug: 'kwak-seong-min',
      avatar: '/images/avatars/avatar_10.png'
    },
    members: 8
  },
  {
    id: uuid(),
    title: 'Neura e-commerce UI Kit',
    slug: 'neura-e-commerce-ui-kit',
    price: '12,500',
    currency: '$',
    start_date: moment(),
    end_date: moment(),
    status: 'In progress',
    author: {
      name: 'Shen Zhi',
      slug: 'shen-zhi',
      avatar: '/images/avatars/avatar_11.png'
    },
    members: 10
  },
  {
    id: uuid(),
    title: 'Administrator Dashboard',
    slug: 'administrator-dashboard',
    price: '15,750',
    currency: '$',
    start_date: moment(),
    end_date: moment(),
    status: 'Canceled',
    author: {
      name: 'Cao Yu',
      slug: 'cao-yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    members: 2
  },
  {
    id: uuid(),
    title: 'Kalli UI Kit',
    slug: 'kalli-ui-kit',
    price: '15,750',
    currency: '$',
    start_date: moment(),
    end_date: moment(),
    status: 'Completed',
    author: {
      name: 'Anje Keizer',
      slug: 'anje-keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    members: 12
  }
];
