<template>
  <div class="nav">
       <div class="searchs">
         <i id="search-icon" class="fa fa-search"></i>
       </div> 
       <div class="bell">
          <i id="search-icon" class="fa fa-bell"></i>
       </div>
       <img src="https://assets-global.website-files.com/5e3898dff5077817ea80d71c/60aea484bc8d834b32902b8b_Amy-1-min.png" class="images">
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
.searchs{
  width: 25%;
  border: 2px solid black;
  border-radius: 10px;
  margin: 20px 0px;
  text-align: right;
  margin-left: 65%;
}
.bell{
  margin: 20px 15px;
}
#search-icon{
  font-size:20px; 
  margin-top:5px;
  cursor: pointer;
}
.images{
    width: 65px;
    height: 65px;
    max-height: 70px;
    max-width: 70px;
    border-radius: 50px;
    background-position: 50% 50%;
   background-size: 100%;
   cursor: pointer;
}
</style>