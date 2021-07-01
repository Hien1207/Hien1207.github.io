Vue.filter('currency',function(value){
    return '$' + value.toFixed(2);
});

new Vue({
    el: '#app',
    data:{
        services:[
        {
            name: 'Web Development',
            price : 300,
            active :true
        },
        {
            name: 'Design',
            price : 400,
            active :true 
        },
        {
            name: 'Integration',
            price : 250,
            active :false
        },
        {
            name: 'Training',
            price : 220,
            active :false
        },
     ],
    },
    methods:{
        Active: function(item){
            item.active =!item.active;
        },
        total: function(){
            var total =0;
            this.services.forEach(function(item){
                if(item.active){
                    total += item.price;
                }
            })
            return total;
        }
    }
});
