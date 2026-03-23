import {formatCurrency} from '../javascript-amazon-project-main/scripts/utils/money.js';

console.log('test suit: formatCurrency :')

console.log('================With 2095================');
if (formatCurrency (2095) === '20.95') {
  console.log('working');
  } else {
  console.log('not working');
};

console.log('================With rounds up to the nearewst cent===============');

if (formatCurrency (2000.5) === '20.01') {
  console.log('working');
  } else {
  console.log('not working');
};

console.log('================With 0================');

if (formatCurrency (0) === '0.00') {
  console.log('working');
  } else {
  console.log('not working');
};