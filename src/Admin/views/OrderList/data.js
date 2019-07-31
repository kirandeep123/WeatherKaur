import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    created_at: moment().subtract(10, 'minutes'),
    customer: {
      name: 'Ekaterina Tankova',
      slug: 'ekaterina-tankova'
    },
    payment: {
      ref: 'FAD103',
      method: 'CreditCard',
      total: '500.00',
      currency: '$',
      status: 'pending'
    },
    status: 'inactive'
  },
  {
    id: uuid(),
    created_at: moment()
      .subtract(32, 'minutes')
      .subtract(23, 'seconds'),
    customer: {
      name: 'Cao Yu',
      slug: 'cao-yu'
    },
    payment: {
      ref: 'FAD102',
      method: 'CreditCard',
      total: '500.00',
      currency: '$',
      status: 'pending'
    },
    status: 'inactive'
  },
  {
    id: uuid(),
    created_at: moment()
      .subtract(36, 'minutes')
      .subtract(51, 'seconds'),
    customer: {
      name: 'Alexa Richardson',
      slug: 'alexa-richardson'
    },
    payment: {
      ref: 'FAD101',
      method: 'PayPal',
      total: '500.00',
      currency: '$',
      status: 'completed'
    },
    status: 'active'
  },
  {
    id: uuid(),
    created_at: moment()
      .subtract(38, 'minutes')
      .subtract(55, 'seconds'),
    customer: {
      name: 'Anje Keizer',
      slug: 'anje-keizer'
    },
    payment: {
      ref: 'FAD100',
      method: 'CreditCard',
      total: '500.00',
      currency: '$',
      status: 'pending'
    },
    status: 'inactive'
  },
  {
    id: uuid(),
    created_at: moment()
      .subtract(40, 'minutes')
      .subtract(3, 'seconds'),
    customer: {
      name: 'Clarke Gillebert',
      slug: 'clarke-gillebert'
    },
    payment: {
      ref: 'FAD99',
      method: 'PayPal',
      total: '500.00',
      currency: '$',
      status: 'completed'
    },
    status: 'active'
  },
  {
    id: uuid(),
    created_at: moment()
      .subtract(45, 'minutes')
      .subtract(32, 'seconds'),
    customer: {
      name: 'Adam Denisov',
      slug: 'adam-denisov'
    },
    payment: {
      ref: 'FAD98',
      method: 'PayPal',
      total: '500.00',
      currency: '$',
      status: 'completed'
    },
    status: 'active'
  },
  {
    id: uuid(),
    created_at: moment()
      .subtract(48, 'minutes')
      .subtract(57, 'seconds'),
    customer: {
      name: 'Ava Gregoraci',
      slug: 'ava-gregoraci',
      avatar: '/images/avatars/avatar_8.png'
    },
    payment: {
      ref: 'FAD97',
      method: 'CreditCard',
      total: '500.00',
      currency: '$',
      status: 'pending'
    },
    status: 'inactive'
  },
  {
    id: uuid(),
    created_at: moment()
      .subtract(49, 'minutes')
      .subtract(4, 'seconds'),
    customer: {
      name: 'Emilee Simchenko',
      slug: 'emilee-simchenko'
    },
    payment: {
      ref: 'FAD96',
      method: 'CreditCard',
      total: '500.00',
      currency: '$',
      status: 'completed'
    },
    status: 'active'
  },
  {
    id: uuid(),
    created_at: moment()
      .subtract(57, 'minutes')
      .subtract(43, 'seconds'),
    customer: {
      name: 'Kwak Seong-Min',
      slug: 'kwak-seong-min'
    },
    payment: {
      ref: 'FAD95',
      method: 'PayPal',
      total: '500.00',
      currency: '$',
      status: 'rejected'
    },
    status: 'inactive'
  },
  {
    id: uuid(),
    created_at: moment()
      .subtract(59, 'minutes')
      .subtract(6, 'seconds'),
    customer: {
      name: 'Shen Zhi',
      slug: 'shen-zhi'
    },
    payment: {
      ref: 'FAD94',
      method: 'CreditCard',
      total: '500.00',
      currency: '$',
      status: 'canceled'
    },
    status: 'inactive'
  },
  {
    id: uuid(),
    created_at: moment()
      .subtract(1, 'hour')
      .subtract(15, 'minutes')
      .subtract(43, 'seconds'),
    customer: {
      name: 'Merrile Burgett',
      slug: 'merrile-burgett'
    },
    payment: {
      ref: 'FAD93',
      method: 'PayPal',
      total: '500.00',
      currency: '$',
      status: 'canceled'
    },
    status: 'inactive'
  }
];
