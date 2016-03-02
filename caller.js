/**
 * Created by mag on 16-2-16.
 */
function callerDemo() {
    if(arguments.caller) {
        var a = callerDemo.caller.toString();
        console.log(a);
    }else{
        console.log('this is a top function');
    }
}

function handleCaller() {
    callerDemo();
}
handleCaller();

function calleeDemo() {
    console.log(arguments.callee);
}
calleeDemo();
console.log('=========');

