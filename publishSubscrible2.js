/**
 * Created by mag on 16-3-6.
 */
var salesOffices = {};  //定义售楼处；
salesOffices.clientList = [];   //缓存列表，存放订阅者的回调函数
salesOffices.listen = function (key, fn) {
    if (!this.clientList[key]) {
        this.clientList[key] = [];  //如果还没有订阅此消息，给改类消息创建一个缓存列表
    }
    this.clientList[key].push(fn);  //订阅的消息添加进消息缓存列表
};

salesOffices.trigger = function () {    //发布消息
    var key = Array.prototype.shift.call(arguments),    //取出消息类型
        fns = this.clientList[key];     //取出该消息对应的回调函数集合
    if (!fns || fns.length === 0) {     //如果没有订阅该消息，则返回
        return false;
    }
    for(var i = 0, fn; fn = fns[i++]; ) {
        fn.apply(this, arguments);   //arguments是发布消息时附送的参数
    }
};

salesOffices.listen('squareMeter88', function (prices) {    //小明订阅88平方米房子的消息
    console.log('价格 = ' + prices);
});

salesOffices.listen('squareMeter100', function (prices) {    //小红订阅100平方米房子的消息
    console.log('价格 = ' + prices);
});

salesOffices.trigger('squareMeter88', 20000);   //发布88平米房子的价格
salesOffices.trigger('squareMeter100', 30000);   //发布100平米房子的价格
