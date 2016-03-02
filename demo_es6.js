/**
 * Created by mag on 16-2-21.
 */
'use strict'
let someString = 'hello';
console.log(typeof someString[Symbol.iterator]);
let iterator = someString[Symbol.iterator]();
//iterator.next();
//iterator.next();
//iterator.next();
for(let v of iterator) {
    console.time('time');
    v =[...v]
    console.log(v)
    console.log(typeof v)
    console.timeEnd('time')
}
