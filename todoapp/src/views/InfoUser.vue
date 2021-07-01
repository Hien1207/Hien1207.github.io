<template>
 <div>
    <div class="info">
      <img :src="showuser.avatar" alt="">
      <div class="infomation">
         <h1>{{showuser.name}}</h1>
         <p>{{showuser.phoneNumber}}</p>
         <p>Artificial Intelligence (AI) can be confusing. AI is a broad term that covers a wide range of applications, 
          and while we see AI technologies performing a swath of incredible feats such as Google Translate, AlphaGo, and solving a
          rubik's cube, it can be hard to tell which business problems AI is apt to solve. Matching a given problem to an AI solution
           often comes down to framing: sometimes what appears as an intractable problem can, with minor tweaks, become the kind of proble
           AI excels at solving.</p>
      </div>
    </div>
    <div class="form" >
         <div class="edit_form">
            <h4 style="font-weight:100; margin-bottom:10px">Name</h4>
            <input  type="text" id="Text-input"  v-model="user.name">
               <h4 style="font-weight:100">PhoneNumber</h4>
               <input  type="text" id="Text-input"  v-model="user.phoneNumber">
         </div>
         <div class="button_ed">
            <td  class="td">
               <button @click="editData()" class="btton" >Edit</button>  
            </td>
            <td class="td">
               <button type="submit" @click="updateData()" style="margin-left:70px"  class="btton" >Save</button>
            </td>
            <button @click="deleteData() in users " class="btton"  style="width:78%">Delete</button>  
         </div>
    </div>  
 </div>
   
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'userDetail',
  data(){
     return{
         showuser :{},
         user: {
                    name: '',
                    phoneNumber: ''
                },
     }
  },
  async created(){
    const response = await axios.get(`https://60d98e3ceec56d00174778b8.mockapi.io/v1/users/${this.$route.params.id}`)
    this.showuser = response.data
 },
 methods:{
   async deleteData() {
      const response = await axios.delete(`https://60d98e3ceec56d00174778b8.mockapi.io/v1/users/${this.$route.params.id}`)
       this.user = response.data
       alert("Đã xóa user")
      return  this.$router.push('/')
      },
    editData:function() {
           this.user.name = this.showuser.name;
           this.user.phoneNumber= this.showuser.phoneNumber;
           this.user.isEdit= true
			},
     async updateData(){  
        const response = await axios.put(`https://60d98e3ceec56d00174778b8.mockapi.io/v1/users/${this.$route.params.id}`, {
                      name: this.user.name,
                      phoneNumber: this.user.phoneNumber,
                    })
      .then(function (response) {
         alert("Edit thành công");
           location.reload();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(response.data)
    },
   }
}
</script>
<style scoped>
.info{
   width: 100%;
   height: 340px;
   display: flex;
}
.infomation{
   width: 60%;
   height: 200px;
   margin:6% 0px 0px 5%;
   display: block;
}
img{
  width: 30%;
  border-radius: 50%;
  margin: 25px;
}
.button_ed{
   display: block;
   width: 40%;
}
.form{
   display: flex;
}
.edit_form{
   width: 40%;
   margin-left: 20%;
}
.td{
   width: 400px;
}
#Text-input{
    width: 80%;
    padding: 8px 12px;
    background-color: transparent;
    border: 1px solid #191919;
    transition: all .15s ease;
}
.btton{
  width: 70%;
  height: 50px;
  margin: 40px 0px 0px 100px;
  font-weight: 700;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  transition:all 0.8s ease-in-out ;
}
.btton:hover{
    background: rgb(242, 205, 243);
}
</style>