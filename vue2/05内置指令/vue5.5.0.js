var app = new Vue({
    el: '#app',
    data: {
        checkedAll: false,
        list: [{
            id: 1,
            name: 'iPhone 1',
            price: '1988',
            count: 1,
            ifChecked: false
        }, {
            id: 2,
            name: 'iPhone 2',
            price: '2988',
            count: 1,
            ifChecked: false
        }, {
            id: 3,
            name: 'iPhone 3',
            price: '3988',
            count: 1,
            ifChecked: false
        }, {
            id: 4,
            name: 'iPhone 4',
            price: '4988',
            count: 1,
            ifChecked: false
        }]
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                var item = this.list[i];
                if (item.ifChecked) {
                    total += item.price * item.count;
                }
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods: {
        handleReduce: function (index) {
            if (this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function (index) {
            this.list[index].count++;
        },
        handleRemove: function (index) {
            this.list.splice(index, 1);
        },
        changeAll: function () {
            for (let index = 0; index < this.list.length; index++) {
                //已经全选时候点击，则全不选
                this.checkedAll ? this.list[index].ifChecked = false : this.list[index].ifChecked = true;
            }
            this.checkedAll ? this.checkedAll = false : this.checkedAll = true;
        },
        changeOne: function (index) {
            //已经选择的，改为不选状态
            this.list[index].ifChecked ? this.list[index].ifChecked = false : this.list[index].ifChecked = true;
        }
    }
});