Vue.component('blog-post', {
    props:{
        items:{
            type: Array,
            default:null,
        }
    } ,
    data(){
        return{
            size:10
        }
    },
    methods:{
        test(){
            this.$emit('enlarge-text',this.size)
        }
    },
    template : `<div> 
          <button @click="test">
           Enlarge text 
           </button>
           </div>`
})
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
new Vue({
    el:'#app',
    data(){
        return{
        postFontSize:10,
        message :'Hello word111'
        }
    },
    methods:{
        incFontSize(...arg){
            const [number,b] =arg
            this.postFontSize += number
            console.log(b)
        }
    }
})






// new Vue({
//     el: '#app',
//     data:{
//         customeUrl:'https://facebook.com',
//         currentInput:'D',
//         arr:[
//             {
//                 name: 'A',
//                 done:false
//             },
//             {
//                 name: 'B',
//                 done:true
//             },
//             {
//                 name: 'C',
//                 done:false
//             },
//         ],
//     },
//     methods:{
//         addToArr(){
//             if(!this.arr.find(item => item.name === this.currentInput))
//             {this.arr.push({
//                 name: this.currentInput
//             })
//             this.currentInput = null
//         }
//         else{
//              alert('Da co roi')
//         }
//        },
//        removeFromArr(item){
//          const itemindex =  this.arr.findIndex(i => i.name === item.name)
//          if(itemindex >= 0){
//              this.arr[itemindex].done =! this.arr.splice(itemindex,1)
//          }
//        }
//     },
// })







// new Vue({
//     el:'#app',
//     data:{
//         bienA:1,
//         bienC:3,
//     },
//     computed:{
//         bienB(){
//             this.bienC = this.bienA +3;
//             return this.bienA*3;
//         }
//     }
// })