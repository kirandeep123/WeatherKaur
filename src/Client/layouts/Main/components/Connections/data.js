import uuid from 'uuid/v1';
import moment from 'moment';

export default {
  groups: [
    {
      id: 'clients',
      name: 'Clients'
    },
    {
      id: 'friends',
      name: 'Friends'
    }
  ],
  connections: [
    {
      id: uuid(),
      name: 'Ekaterina Tankova',
      slug: 'ekaterina-tankova',
      avatar: '/images/avatars/avatar_2.png',
      active: false,
      lastActivity: moment().subtract(24, 'minutes'),
      group: 'clients'
    },
    {
      id: uuid(),
      name: 'Cao Yu',
      slug: 'cao-yu',
      avatar: '/images/avatars/avatar_3.png',
      active: true,
      lastActivity: moment(),
      group: 'clients'
    },
    {
      id: uuid(),
      name: 'Anje Keizer',
      slug: 'anje-keizer',
      avatar: '/images/avatars/avatar_5.png',
      active: false,
      lastActivity: moment().subtract(1, 'minutes'),
      group: 'clients'
    },
    {
      id: uuid(),
      name: 'Ava Gregoraci',
      slug: 'ava-gregoraci',
      avatar: '/images/avatars/avatar_8.png',
      active: true,
      lastActivity: moment(),
      group: 'clients'
    },
    {
      id: uuid(),
      name: 'Clarke Gillebert',
      slug: 'clarke-gillebert',
      avatar: '/images/avatars/avatar_6.png',
      active: true,
      lastActivity: moment(),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Adam Denisov',
      slug: 'adam-denisov',
      avatar: '/images/avatars/avatar_7.png',
      active: false,
      lastActivity: moment().subtract(24, 'minutes'),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Emilee Simchenko',
      slug: 'emilee-simchenko',
      avatar: '/images/avatars/avatar_9.png',
      active: true,
      lastActivity: moment(),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Kwak Seong-Min',
      slug: 'kwak-seong-min',
      avatar: '/images/avatars/avatar_10.png',
      active: true,
      lastActivity: moment(),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Shen Zhi',
      slug: 'shen-zhi',
      avatar: '/images/avatars/avatar_11.png',
      active: true,
      lastActivity: moment(),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Merrile Burgett',
      slug: 'merrile-burgett',
      avatar: '/images/avatars/avatar_12.png',
      active: false,
      lastActivity: moment().subtract(2, 'days')
    }
  ]
};
