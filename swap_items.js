var swapItems = function(arr, index1, index2) {
	arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
};
var arr = [1,2,3,4,5];
var l = arr.length-1;
var timer='timer:';
console.time(timer);
console.info(swapItems(arr,0,l));
console.timeEnd(timer);
