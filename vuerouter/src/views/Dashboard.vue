<template>
  <div >
    <div class="containerd">
    <div class="container-leftd"  style="margin-top:100px">
        <h1 class="hero__header">You’re in good company</h1>
        <p class="p-text">Trusted by the forward-thinking companies.</p>    
    </div>
     <div class="container-leftd">
       <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/5f99f9333ff84a69d405d34f_customer%20hero.svg" class="imgs">
     </div>
    </div>
   <div class="containerd">
    <div class="container-text" style="margin-top:60px">
      <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/608894e4f01929a7922091f1_johnstone%20logo.png" style="width:40%; margin:0px 0px 10px">
        <h1 class="header">How Johnstone Brokerage Services navigates risk and saves time with Impira</h1>
        <p class="p-text">Johnstone Brokerage Services (JBS) provides confidence and guidance for their clients. This means knowing their clients’ needs well and being an advocate for their success by providing crucial insights at the right times. The value of having a rock solid handle on existing financial data and emerging trends cannot be understated. Partnering with Impira has helped JBS determine actionable insights and make meaningful decisions for their clients.</p>    
        <div class="email-form"> 
              <a class="forms">Read more</a>
            </div>
    </div>
     <div class="container-img">
       <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/6088ac5789992cf28da6c0de_background%20shape.svg" class="imgs" style="width:150%">
     </div>
    </div>
    <div class="section">
        <div class="section-text">
           <h2 class="white">Try Impira’s data extraction capabilities today.</h2>
           <div class="email-form" style="margin-left:110px"> 
              <a class="form">Try for free</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss">
.containerd{
    position: relative;
    z-index: 3;
    display: flex;
    width: 100%;
    max-width: none;
    margin-left: 5%;
    background-color: transparent;
}
.container-leftd{
  width: 50%;
  display: block;
    overflow: visible;
    height: auto;
    max-width: 960px;
    min-height: 0;
    min-width: 0;
    margin-left: 0;
    padding-top: 24px;
}
.container-text{
  width: 70%;
  display: block;
    overflow: visible;
    height: auto;
    max-width: 960px;
    min-height: 0;
    min-width: 0;
    margin-left: 0;
    padding-top: 24px;
}
.container-img{
  width: 30%;
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
.header{
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 50px;
    line-height: 1;
    text-align: left;
    font-weight: 1;
}
.hero__header{
  margin-top: 0;
    margin-bottom: 24px;
    font-size: 70px;
    line-height: 1;
    text-align: left;
    font-weight: 1;
}
.p-text{ 
  margin-bottom: 16px;
    font-size: 18px;
    line-height: 1.65;
    font-weight: 400;
}
.imgs{
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    padding: 32px 0 32px 32px;
    align-self: center;
}
.email-form{
    width: 200px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 8px;
}
.form{
   display: inline-block;
    min-height: 30px;
    padding: 10px 24px 8px;
    background-color: white;
     border:2px solid black;
    color: black;
    line-height: 2;
    font-weight: 500;
    letter-spacing: .25px;
    cursor: pointer;
    transition:all 0.5s ease-in-out ;
}
.form:hover{
  background: black;
  color: white;
  text-decoration: none;
}
.forms{
   display: inline-block;
    min-height: 30px;
    padding: 10px 24px 8px;
    background-color: #0f0f0f;
    color: #fff;
    line-height: 2;
    font-weight: 500;
    letter-spacing: .25px;
    cursor: pointer;
     transition:all 0.5s ease-in-out ;
}
.forms:hover{
  background: white;
  color: black;
  border:2px solid black;
    text-decoration: none;
}
.section{
  width: 113%;
  height: 250px;
  margin: 10px 5%;
  background-color: #2281f6;
  background-image:url(https://assets-global.website-files.com/5e3898dff507782a6580d710/5f99f2d6b35ee3a6ee6b5cd7_brand%20hero.svg);
}
.section-text{
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 30px;
}
.white{
  color: white;
  font-size: 40px;
}
</style>
