<template>
  <div class="nav">
    <img  class="img"  @click="$router.push('/')" src="https://assets-global.website-files.com/5e3898dff507782a6580d710/605900c97eb21442df5b7f28_Logo_lock_up_150x63-website.gif">
  <div class="navbar-menu">
    <router-link  class="view" to="/about">About</router-link> 
     <router-link class="view" to="/blogs">Blogs</router-link> 
  </div>
  <div class="navbar-login">
       <div class="search">
         <i id="search-icon" class="fa fa-search"></i>
       </div>
    <button  @click="$router.push('/auth/login')" class="login-1">Login</button>  
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav{
  display: flex;
  font-family: Matter,sans-serif;
  border-bottom: 1px solid black;
}
.img{
  margin-left: 5%;
  cursor: pointer;
}
.navbar-menu{
  display: flex;
  width: 40%;
  margin-left: 4%;
  margin-right: 20%;
}
.view{
  color:black;
  font-family: "Courier New", Courier, monospace;
  text-decoration: none;
  width: 18%;
   margin: 1.7rem;
   text-align: center;
   font-size: 18px;
}
.router-link-active{
  font-weight: 700;
}
.navbar-login{
  width: 40%;
  display: flex;
}
.search{
  width: 60%;
  border: 2px solid black;
  border-radius: 10px;
  margin: 20px 0px;
  text-align: right;
}
#search-icon{
  font-size:20px; 
  margin-top:5px;
  cursor: pointer;
}
.login-1{
  margin: 20px;
  font-weight: 700;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  transition:all 0.8s ease-in-out ;
}
.login-1:hover{
  background: rgb(242, 205, 243);
}
</style>