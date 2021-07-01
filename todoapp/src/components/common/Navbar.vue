<template>
  <div class="nav">
    <div class="todo" @click="$router.push('/')">
       <h1 style="margin:17px">todo</h1>
    </div>
  <div class="navbar-add">
    <button  @click="$router.push('/register')" class="add-1">+</button>  
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav{
  width: 100%;
  height: 80px;
  border-bottom: 1px solid black;
  display: flex;
  font-family: Matter,sans-serif;
}
.todo{
  width: 150px;
  margin-left: 8%;
  cursor: pointer;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  border-radius: 20px;
}
.todo:hover {
    background: rgb(255, 241, 212);
}
.navbar-add{
  margin-left: 74%;
  width: 10%;
  display: flex;
}
.add-1{
  margin: 10px;
  font-size: 40px;
  width: 70px;
  font-weight: 700;
  background: white;
  border:0px solid green;
  border-radius: 80px;
  cursor: pointer;
  transition:all 0.8s ease-in-out ;
}
.add-1:hover{
  background: rgb(242, 205, 243);
}
</style>