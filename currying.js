/**
 * Created by mag on 16-2-9.
 */
'use strict'
let cost = (function(){
    let args = [];
    return function() {
        if(arguments.length ===0) {
            let money = 0;
            for(let i = 0, l = args.length; i < l; i++) {
                money += args[i];
            }
            return money;
        }else{
            [].push.apply(args, arguments)
        }
    }
})();
cost(100);
cost(200);
cost(300);
console.log(cost());