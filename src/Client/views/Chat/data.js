import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    otherUser: {
      name: 'Adam Denisov',
      avatar: '/images/avatars/avatar_7.png',
      active: true,
      lastActivity: moment()
    },
    messages: [
      {
        id: uuid(),
        sender: {
          name: 'Adam Denisov',
          slug: 'adam-denisov',
          avatar: '/images/avatars/avatar_7.png'
        },
        content:
          'Hey, nice projects! I really liked the one in react. What\'s your quote on kinda similar project?',
        contentType: 'text',
        created_at: moment().subtract(10, 'hours')
      },
      {
        id: uuid(),
        sender: {
          name: 'Shen Zhi',
          slug: 'shen-zhi',
          avatar: '/images/avatars/avatar_11.png'
        },
        content:
          'I would need to know more details, but my hourly rate stats at $35/hour. Thanks!',
        contentType: 'text',
        created_at: moment().subtract(2, 'hours')
      },
      {
        id: uuid(),
        sender: {
          name: 'Adam Denisov',
          slug: 'adam-denisov',
          avatar: '/images/avatars/avatar_7.png'
        },
        content:
          'Well it\'s a really easy one, I\'m sure we can make it half of the price.',
        contentType: 'text',
        created_at: moment().subtract(5, 'minutes')
      },
      {
        id: uuid(),
        sender: {
          name: 'Shen Zhi',
          slug: 'shen-zhi',
          avatar: '/images/avatars/avatar_11.png'
        },
        content:
          'Then why don\'t you make it if it\'s that easy? Sorry I\'m not interetes, have fantastic day Adam!',
        contentType: 'text',
        created_at: moment().subtract(3, 'minutes')
      },
      {
        id: uuid(),
        sender: {
          name: 'Adam Denisov',
          slug: 'adam-denisov',
          avatar: '/images/avatars/avatar_7.png'
        },
        content: 'Last offer, $25 per hour',
        contentType: 'text',
        created_at: moment().subtract(1, 'minute')
      },
      {
        id: uuid(),
        sender: {
          name: 'Adam Denisov',
          slug: 'adam-denisov',
          avatar: '/images/avatars/avatar_7.png'
        },
        content: '/images/projects/project_1.jpg',
        contentType: 'image',
        created_at: moment().subtract(1, 'minute')
      }
    ],
    unread: 0,
    created_at: moment().subtract(1, 'minute')
  },
  {
    id: uuid(),
    otherUser: {
      name: 'Ekaterina Tankova',
      avatar: '/images/avatars/avatar_2.png',
      active: true,
      lastActivity: moment()
    },
    messages: [
      {
        id: uuid(),
        sender: {
          name: 'Shen Zhi',
          slug: 'shen-zhi',
          avatar: '/images/avatars/avatar_11.png'
        },
        content: 'Hey, would you like to collaborate?',
        contentType: 'text',
        created_at: moment().subtract(6, 'minutes')
      },
      {
        id: uuid(),
        sender: {
          name: 'Ekaterina Tankova',
          slug: 'ekaterina-tankova',
          avatar: '/images/avatars/avatar_2.png'
        },
        content: 'I don\'t think that\'s ideal',
        contentType: 'text',
        created_at: moment().subtract(5, 'minutes')
      }
    ],
    unread: 3,
    created_at: moment().subtract(26, 'minutes')
  },
  {
    id: uuid(),
    otherUser: {
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png',
      active: false,
      lastActivity: moment().subtract(2, 'minutes')
    },
    messages: [
      {
        id: uuid(),
        sender: {
          name: 'Emilee Simchenko',
          slug: 'emilee-simchenko',
          avatar: '/images/avatars/avatar_9.png'
        },
        content: 'Hi Shen, we should submit the product today',
        contentType: 'text',
        created_at: moment().subtract(2, 'hours')
      },
      {
        id: uuid(),
        sender: {
          name: 'Shen Zhi',
          slug: 'shen-zhi',
          avatar: '/images/avatars/avatar_11.png'
        },
        content: 'Oh, totally forgot about it',
        contentType: 'text',
        created_at: moment()
          .subtract(1, 'hour')
          .subtract(2, 'minutes')
      },
      {
        id: uuid(),
        sender: {
          name: 'Shen Zhi',
          slug: 'shen-zhi',
          avatar: '/images/avatars/avatar_11.png'
        },
        content: 'Alright then',
        contentType: 'text',
        created_at: moment().subtract(1, 'hour')
      }
    ],
    unread: 0,
    created_at: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    otherUser: {
      name: 'Kwak Seong-Min',
      avatar: '/images/avatars/avatar_10.png',
      active: true,
      lastActivity: moment()
    },
    messages: [
      {
        id: uuid(),
        sender: {
          name: 'Shen Zhi',
          slug: 'shen-zhi',
          avatar: '/images/avatars/avatar_11.png'
        },
        content:
          'Hi Kwak! I\'ve seen your projects and we can work together on a project. Will send you the details later.',
        contentType: 'text',
        created_at: moment().subtract(3, 'days')
      },
      {
        id: uuid(),
        sender: {
          name: 'Kwak Seong-Min',
          slug: 'kwak-seong-min',
          avatar: '/images/avatars/avatar_10.png'
        },
        content: 'Haha, right, we\'ll do it',
        contentType: 'text',
        created_at: moment().subtract(2, 'days')
      }
    ],
    unread: 1,
    created_at: moment().subtract(2, 'days')
  },
  {
    id: uuid(),
    otherUser: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png',
      active: false,
      lastActivity: moment().subtract(4, 'hours')
    },
    messages: [
      {
        id: uuid(),
        sender: {
          name: 'Shen Zhi',
          slug: 'shen-zhi',
          avatar: '/images/avatars/avatar_11.png'
        },
        content: 'Did you receive my email about the brief?',
        contentType: 'text',
        created_at: moment().subtract(3, 'days')
      },
      {
        id: uuid(),
        sender: {
          name: 'Cao Yu',
          slug: 'cao-yu',
          avatar: '/images/avatars/avatar_3.png'
        },
        content: 'I\'m not sure, but I will check it later',
        contentType: 'text',
        created_at: moment().subtract(2, 'days')
      }
    ],
    unread: 0,
    created_at: moment().subtract(5, 'days')
  },
  {
    id: uuid(),
    otherUser: {
      name: 'Clarke Gillebert',
      avatar: '/images/avatars/avatar_6.png',
      active: true,
      lastActivity: moment()
    },
    messages: [
      {
        id: uuid(),
        sender: {
          name: 'Clarke Gillebert',
          slug: 'clarke-gillebert',
          avatar: '/images/avatars/avatar_6.png'
        },
        content: 'Hey Shen! I love your projects!!!',
        contentType: 'text',
        created_at: moment().subtract(2, 'days')
      },
      {
        id: uuid(),
        sender: {
          name: 'Shen Zhi',
          slug: 'shen-zhi',
          avatar: '/images/avatars/avatar_11.png'
        },
        content: 'Haha thank you Clarke, I\'m doing our best',
        contentType: 'text',
        created_at: moment().subtract(3, 'days')
      }
    ],
    unread: 0,
    created_at: moment().subtract(5, 'days')
  }
];