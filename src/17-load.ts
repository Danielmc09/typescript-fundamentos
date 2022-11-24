// var _ = require('lodasH');
import _ from 'lodash';

const data = [
  {
    username: 'L',
    role: 'seller',
  },
  {
    username: 'M',
    role: 'seller',
  },
  {
    username: 'S',
    role: 'Backend',
  },
  {
    username: 'U',
    role: 'FrontEnd',
  }
];

const rta  = _.groupBy(data, (item) => item.role);
console.log(rta)

const rr = 1 + '1';
console.log(rr)
