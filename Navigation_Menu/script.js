
new Vue({
    el: '#app',
    data:{
        active: 'HOME'
    },
    methods:{
        SuLyNavBar: function(item)
        {
            this.active = item;
        }
    }
})
