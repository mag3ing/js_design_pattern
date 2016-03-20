var name = 'the window';
var obj = {
    name: 'the obj',
    getNameFunc: function() {
        return function() {
            return this.name;
        };
    }
};
console.log(obj.getNameFunc()());
console.log(obj.getNameFunc()());
