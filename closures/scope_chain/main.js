// example for closure scoping - Enclosed: Module

import { getFilling, setFilling } from './fillingModule.mjs';

console.log(getFilling()); // logs:  
setFilling('caramel'); 
console.log(getFilling()); // logs: 