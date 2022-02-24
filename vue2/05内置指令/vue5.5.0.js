var app = new Vue({
    el: '#app',
    data: {
        list: [{
            id: 1,
            name: 'iPhone 1',
            price: '1988',
            count: 1
        }, {
            id: 2,
            name: 'iPhone 2',
            price: '2988',
            count: 1
        }, {
            id: 3,
            name: 'iPhone 3',
            price: '3988',
            count: 1
        }, {
            id: 4,
            name: 'iPhone 4',
            price: '4988',
            count: 1
        }]
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                var item = this.list[i];
                total += item.price * item.count;
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

        }
    }
});