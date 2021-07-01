new Vue ({
    el :'#todo',
    data :{
        currentInput:'',
        todo:[
            // {
            //     name: 'Java',
            //     isComplete: false,
            //     editing :false,
            //     editingId :0
            // },
            // {
            //     name: 'C++',
            //     isComplete: false,
            //     editing :false,
            //     editingId :1
            // },
            // {
            //     name: 'C#',
            //     isComplete: false,
            //     editing :false,
            //     editingId :2
            // },
        ],
    },
    methods:{
        add(){
            if(this.currentInput !== ' ')
            {
                if(this.editing)
                {
                    this.editingId.name = this.currentInput,
                    this.currentInput=null,
                    this.editing=false               
                }
                else{
                    if(!this.todo.find(item => item.name === this.currentInput))
                    {  
                        this.todo.push({
                        name: this.currentInput,
                        isComplete :false
                    })
                    this.currentInput = null;
                }
                else{
                     alert('Da co roi'),
                     this.currentInput=null
                }
                }
            }    
       },
        complete(item){
            item.isComplete = !item.isComplete;
        },
       edit(item)
       {
            this.currentInput = item.name,
            this.editing = true,
            this.editingId = item
       },
       remove(item){
         const itemindex =  this.todo.findIndex(i => i.name === item.name)
         if(itemindex >= 0){
             this.todo[itemindex].done =! this.todo.splice(itemindex,1)
         }
       }
    },
})