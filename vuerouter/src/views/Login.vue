<template>
   <div class="container">
        <div class="container-left">
           <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/5f20841657c42b5f6ac4c585_completing%20shape.png" class="contained-image">
        </div>
        <div class="container-left">
          <img src="https://s3.amazonaws.com/drift-public-prod/1364422/614989dd83b0c129e6cb26c22a8fac89vbeu573vd7iw" class="image-icon" >
          <div class="layout-box-sizing">
             <h1 class="heading-size">Log in</h1>
          </div>
          <div class="layout-box-sizing">
              <div class="layout-box-sizing" style="margin-bottom:16px">
                <div class="Text-input-lable">
                   <h3 style="font-weight:100">Email</h3>
                </div>
                <div  class="Text-input-box " > 
                   <input placeholder="Enter your email" type="text" id="Text-input">
                </div>
              </div>
              <div class="layout-box-sizing" style="margin-bottom:16px">
                <div class="Text-input-lable">
                   <h3 style="font-weight:100">Password</h3>
                </div>
                <div  class="Text-input-box " > 
                   <input placeholder="Enter your password" type="text" id="Text-input">
                </div>
              </div>
              <div class="layout-box-sizing" style="margin-bottom:10px; display:flex;"> 
                    <button class="box"></button>
                    <h4 style="margin: 3px 8px; font-weight:100; opacity:0.7">Remember me</h4>
                    <h4 style="margin: 3px 0px 3px 120px; font-weight:100; opacity:0.7">Forgot Password?</h4>
              </div>
              <button  @click="$router.push('/dashboard')" class="login">Login</button>  
          </div>
        </div>
    </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  }
}
</script>

<style>
.container{
    position: relative;
    z-index: 3;
    display: flex;
    width: 90%;
    max-width: none;
    margin-right: 5%;
    margin-left: 5%;
    background-color: transparent;
}
.container-left{
  width: 45%;
  display: block;
    overflow: visible;
    height: auto;
    max-width: 960px;
    min-height: 0;
    min-width: 0;
    margin-left: 0;
    padding-top: 24px;
    padding-left: 36px;
    padding-right: 36px;
}
.contained-image{
  width: 100%;
    max-width: 600px;
    margin-right: 0;
    margin-left: 0;
    padding: 32px 0 32px 32px;
    align-self: center;
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
  margin-bottom: 40px;
}
.heading-size{
   margin-top: 0;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
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
.login{
  width: 90%;
  height: 50px;
  margin: 30px;
  font-weight: 700;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  transition:all 0.8s ease-in-out ;
}
.login:hover{
  background: rgb(242, 205, 243);
}
</style>