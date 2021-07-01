<template>
   <div class="container">
          <img src="https://sm.pcmag.com/t/pcmag_ap/review/t/toodledo/toodledo_pek8.200.jpg" class="image-icon" >
          <div class="layout-box-sizing">
             <h1 class="heading-size">Create User</h1>
          </div>
          <form class="layout-box-sizing" @submit.prevent="createUser">
              <div class="layout-box-sizing" style="margin-bottom:16px">
                <div class="Text-input-lable">
                   <h3 style="font-weight:100">Name</h3>
                </div>
                <div  class="Text-input-box " > 
                   <input v-model="user.name" placeholder="Name..." type="text" id="Text-input">
                </div>
              </div>
              <div class="layout-box-sizing" style="margin-bottom:16px">
                <div class="Text-input-lable">
                   <h3 style="font-weight:100">PhoneNumber</h3>
                </div>
                <div  class="Text-input-box " > 
                   <input v-model="user.phoneNumber" placeholder="PhoneNumber..." type="text" id="Text-input">
                </div>
              </div>
              <button type="submit" class="add">Create</button>  
          </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
            return {
                user: {
                    name: '',
                    phoneNumber: ''
                }
            }
        },
      methods: {
       createUser:function() {
            if(this.user.name =='' | this.user.phoneNumber=='') {alert("Chưa điền thông tin");}
            else {axios.post(`https://60d98e3ceec56d00174778b8.mockapi.io/v1/users`, {
                      name: this.user.name,
                      phoneNumber: this.user.phoneNumber,
                    })
                    alert("Thêm thành công")
                    this.user.name=null;
                    this.user.phoneNumber=null;
            }
        }
      },
     created() {
    console.log(this.$route);
  }
}
</script>

<style>
.container{
    position: relative;
    z-index: 3;
    display: block;
    width: 50%;
    max-width: none;
    margin-right: 5%;
    margin-left:35%;
    background-color: transparent;
}
.image-icon{
  width: 30%;
    max-width: 100px;
    margin-right: 0;
    margin-left: 36%;
    padding: 32px 0 32px 32px;
    align-self: center;
}
.layout-box-sizing{
  box-sizing: border-box;
  margin-bottom: 20px;
}
.heading-size{
   margin-top: 0;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    font-family: 'Courier New', Courier, monospace;
    color: #000;
    letter-spacing: .25px;
    text-align: center;
}
.Text-input-lable{
  margin-bottom: 5px;
  font-weight: 100;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
}
.Text-input-box{
     position: relative;
    display: flex;
    flex-grow: 1;
    background-color: #fff;
    border: none;
    align-items: center;
}
#Text-input{
    width: 100%;
    padding: 8px 12px;
    background-color: transparent;
    border: 1px solid #191919;
    transition: all .15s ease;
}
.box{
  width: 25px;
  height: 25px;
  border:2px solid black;
  border-radius: 8px;
  background: white;
  cursor: pointer;
}
.add{
  width: 90%;
  height: 50px;
  margin: 30px;
  font-weight: 700;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  transition:all 0.8s ease-in-out ;
}
.add:hover{
  background: rgb(242, 205, 243);
}
</style>