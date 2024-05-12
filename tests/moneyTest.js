import {formatCurrency} from "../scripts/utils/money.js"

console.log('Test suit: formatCurrency');

console.log('converts cents into dollers');
formatCurrency(2095) === '20.95' ? console.log('passed') : console.log('failed');

console.log('works with 0');
formatCurrency(0) === '0.00' ? console.log('passed') : console.log('failed');

console.log('Rounds up to the nearest cent')
formatCurrency(2000.5) === '20.01' ? console.log('passed') : console.log('failed');