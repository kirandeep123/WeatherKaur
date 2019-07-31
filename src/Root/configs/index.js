import { Chart } from 'react-chartjs-2';
import moment from 'moment';
import validate from 'validate.js';

import chartjs from './chartjs';
import validators from './validators';

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'seconds',
    ss: '%ss',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1M',
    MM: '%dM',
    y: '1Y',
    yy: '%dY'
  }
});

validate.validators = {
  ...validate.validators,
  ...validators
};
