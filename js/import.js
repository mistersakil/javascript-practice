/* import as an object */
import * as myModule from './module.js';
console.log(myModule);
// console.log(myModule.add(5,2));
// console.log(myModule.sub(5,2));
// console.log(myModule.mul(5,2));

/* import as an destructuring variable */
import {add, mod} from './module.js';
console.log(add(5,2));
console.log(mod(5,2));
// console.log(myModule.mul(5,2));