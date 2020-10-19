var app = new Vue({
    el: "#app",
    data: {
        message: "Hello vue.js",
        orders: [
            {
                name: "Willi Berger",
                meal: 1,
                option: "r"
            },
            {
                name: "Ralf Berger",
                meal: 2,
                option: "s"
            }
        ],
        meals: [
            {id: 1, name: "Pilzgericht", price: 10},
            {id: 2, name: "Sandwich", price: 5},
            {id: 3, name: "Spagetthi", price: 8}
        ],
        options:[
            {id: "s", name: "Small"},
            {id: "r", name: "Regular"},
            {id: "l", name: "Large"},
        ]
    },
    methods: {
        
        priceOfMeal: function (id, option) {
            let price = this.meals.find(m => m.id == id).price;
            switch (option) {
                case "s": return Math.round(price * 0.9);
                case "l": return Math.round(price * 1.1);
                default: return price;
            }
        },
        
        addOrderLine: function () {
            this.orders.push({name: "", meal:1, option:"r"})
        },
        
        removeOrderLine: function (i) {
            console.log(i);
            this.orders = this.orders.filter((v, index) => index !== i); 
        }
    },
    computed: {
        totalAmount: function () {    
            return this.orders.reduce((sum, o) => sum + this.priceOfMeal(o.meal, o.option), 0);
        }        
    }
});
