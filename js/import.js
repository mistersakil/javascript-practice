/* import as an object */

import * as myModule from './module.js';

console.log(myModule.add(5,2));

/* import as an destructuring variable */
import hi, {sub, mul} from './module.js';
hi(5,2);
console.log(mul(5,2));
// console.log(myModule.mul(5,2));