import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    ref: 'DEV1042',
    items: 7,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Ekaterina Tankova',
      slug: 'ekaterina-tankova',
      email: 'ekaterina@devias.io'
    },
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'DEV1041',
    items: 8,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Cao Yu',
      slug: 'cao-yu',
      email: 'cao.yu@devias.io'
    },
    status: 'complete'
  },
  {
    id: uuid(),
    ref: 'DEV1040',
    items: 4,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Alexa Richardson',
      slug: 'alexa-richardson',
      email: 'alexa.richardson@devias.io'
    },
    status: 'rejected'
  },
  {
    id: uuid(),
    ref: 'DEV1039',
    items: 1,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Anje Keizer',
      slug: 'anje-keizer',
      email: 'anje.keiser@devias.io'
    },
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'DEV1038',
    items: 5,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Clarke Gillebert',
      slug: 'clarke-gillebert',
      email: 'clarke.gillebert@devias.io'
    },
    status: 'complete'
  },
  {
    id: uuid(),
    ref: 'DEV1037',
    items: 2,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Merrile Burgett',
      slug: 'merrile-burgett',
      email: 'merrile.burgett@devias.io'
    },
    status: 'complete'
  }
];
