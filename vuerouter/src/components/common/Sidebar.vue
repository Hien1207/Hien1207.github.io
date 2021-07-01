<template>
  <div class="sidebar">
      <div class="logo">
          <img src="https://s3.amazonaws.com/drift-public-prod/1364422/614989dd83b0c129e6cb26c22a8fac89vbeu573vd7iw" class="logo-icon">
          <h1 class="name">Impira</h1>
      </div>
       <div> 
             <button  @click="$router.push('/')" class="logout">Logout</button>  
       </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sidebar{
    width: 20%;
    height: 80%;
    position: fixed;
    border-right: 2px solid black;
}
.logo{
    width: 100%;
    height: 470px;
}
.logo-icon{
    width: 100%;
    max-width: 160px;
    margin-right: 0;
    margin-left: 26%;
    align-self: center;
}
.name{
   margin-left: 22%;
    margin-top:0;
    font-family: "Courier New", Courier, monospace;
    font-size: 50px;
    line-height: 1;
    text-align: left;
    font-weight: 700;
}
.logout{
  width: 80%;
  height: 50px;
  margin: 20px 30px;
  font-weight: 700;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  transition:all 0.8s ease-in-out ;
}
.logout:hover{
  background: rgb(242, 205, 243);
}
</style>