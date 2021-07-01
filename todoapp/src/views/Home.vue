<template>
<div>
 <div class="home">
    <HelloWorld/>
      <div class="user" v-for="(showuser) in users.slice(0,4)" :key="showuser.id"
         @click="gotoUserDetailPage(showuser.id)">
           <img :src="showuser.avatar" alt="">
       </div>
 </div>
   <div class="home">
      <div class="user" v-for="(showuser) in users.slice(4,8)" :key="showuser.id"
         @click="gotoUserDetailPage(showuser.id)">
           <img :src="showuser.avatar" alt="">
       </div>
 </div>
  <div class="home">
      <div class="user" v-for="(showuser) in users.slice(8,12)" :key="showuser.id"
         @click="gotoUserDetailPage(showuser.id)">
           <img :src="showuser.avatar" alt="">
       </div>
 </div>
 <div class="home">
      <div class="user" v-for="(showuser) in users.slice(12,16)" :key="showuser.id"
         @click="gotoUserDetailPage(showuser.id)">
           <img :src="showuser.avatar" alt="">
       </div>
 </div>
 <div class="home">
      <div class="user" v-for="(showuser) in users.slice(16,20)" :key="showuser.id"
         @click="gotoUserDetailPage(showuser.id)">
           <img :src="showuser.avatar" alt="">
       </div>
 </div>
  <div class="home">
      <div class="user" v-for="(showuser) in users.slice(20,24)" :key="showuser.id"
         @click="gotoUserDetailPage(showuser.id)">
           <img :src="showuser.avatar" alt="">
       </div>
 </div>
 <div class="home">
      <div class="user" v-for="(showuser) in users.slice(24,28)" :key="showuser.id"
         @click="gotoUserDetailPage(showuser.id)">
           <img :src="showuser.avatar" alt="">
       </div>
 </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Home',
  data(){
      return{
        users:0,
      };
  },
  async created(){
    const response = await axios.get('https://60d98e3ceec56d00174778b8.mockapi.io/v1/users')
    this.users = response.data
 },
 methods:{
   gotoUserDetailPage(id){
     this.$router.push(`/user/${id}`)
   }  
 }
}
</script>
<style scoped>
.home{
    margin-left: 2%;
    height: 280px;
    width: 72vw;
    display: flex;
    box-sizing: border-box;
}
.user {
  margin: 10px 0;
  cursor: pointer;
  height: 240px;
  width: 240px;
  margin-right: 35px;
  margin-bottom: 20px;
  background: rgb(255, 241, 212);
  border-radius: 30px;
}
.user:hover{
  background: white;
}
img{
  width: 80%;
  border-radius: 50%;
  margin: 25px;
}
</style>