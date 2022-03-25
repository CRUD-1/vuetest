var app = new Vue({
    el: '#app',
    data: {
        checkedAll: false,
        list: [
            [{
                id: 1,
                name: '水果',
                price: '1',
                count: 1,
                ifChecked: false
            }, {
                id: 2,
                name: '水果1',
                price: '1',
                count: 1,
                ifChecked: false
            }, {
                id: 3,
                name: '水果11',
                price: '1',
                count: 1,
                ifChecked: false
            }, {
                id: 4,
                name: '水果111',
                price: '1',
                count: 1,
                ifChecked: false
            }],
            [{
                id: 1,
                name: '电器',
                price: '1',
                count: 1,
                ifChecked: false
            }, {
                id: 2,
                name: '电器2',
                price: '1',
                count: 1,
                ifChecked: false
            }, {
                id: 3,
                name: '电器22',
                price: '1',
                count: 1,
                ifChecked: false
            }, {
                id: 4,
                name: '电器222',
                price: '1',
                count: 1,
                ifChecked: false
            }],
            [{
                id: 1,
                name: '生活用品',
                price: '1',
                count: 1,
                ifChecked: false
            }, {
                id: 2,
                name: '生活用品3',
                price: '1',
                count: 1,
                ifChecked: false
            }, {
                id: 3,
                name: '生活用品33',
                price: '1',
                count: 1,
                ifChecked: false
            }, {
                id: 4,
                name: '生活用品333',
                price: '1',
                count: 1,
                ifChecked: false
            }]
        ]
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                for (var j = 0; j < this.list[i].length; j++) {
                    var item = this.list[i][j];
                    if (item.ifChecked) {
                        total += item.price * item.count;
                    }
                }
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        },
        changeColor:function(){
            return function(x){
                if(x==0){
                    return '#E6E6FA';
                }
                if(x==1){
                    return '#F5F5DC';
                } 
                if(x==2){
                    return '#FFB6C1';
                }
            }
        }
    },
    methods: {
        handleReduce: function (x, y) {
            if (this.list[x][y].count === 1) return;
            this.list[x][y].count--;
        },
        handleAdd: function (x, y) {
            this.list[x][y].count++;
        },
        handleRemove: function (x, y) {
            this.list[x].splice(y, 1);
        },
        changeAll: function () {
            for (var i = 0; i < this.list.length; i++) {
                for (var j = 0; j < this.list[i].length; j++) {
                    //已经全选时候点击，则全不选
                    this.checkedAll ? this.list[i][j].ifChecked = false : this.list[i][j].ifChecked = true;
                }
            }
            this.checkedAll ? this.checkedAll = false : this.checkedAll = true;
        },
        changeOne: function (x, y) {
            //已经选择的，改为不选状态
            this.list[x][y].ifChecked ? this.list[x][y].ifChecked = false : this.list[x][y].ifChecked = true;
        }
    }
});