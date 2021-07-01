<template>
  <div class="sidebar">
      <div class="job" >
         <div class="color" ></div>
         <div class="name_job">work</div>
      </div>
      <div class="job" >
         <div class="color color_1"></div>
         <div class="name_job">study</div>
      </div>
      <div class="job" >
         <div class="color color_2"></div>
         <div class="name_job">entertainment</div>
      </div>
      <div class="job" >
         <div class="color color_3"></div>
         <div class="name_job">family</div>
      </div>
       <div> 
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNyBreCDhkWH0hKIE5gkwEi6wRfFHkI2vqQ&usqp=CAU" class="logos">
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
.job{
  width:100%;
  height: 60px;
  display: flex;
  margin-bottom: 20px;
}
.color{
  width: 40px;
  height: 40px;
  background: rgb(250, 212, 231);
  border-radius: 50px;
  margin:20px 5px 0px 25%;
}
.color_1{
  background: rgb(199, 239, 255);
}
.color_2{
  background: rgb(196, 245, 220);
}
.color_3{
  background: rgb(255, 242, 199);
}
.name_job{
   font-size: 20px;
   font-family: 'Courier New', Courier, monospace;
   font-weight: 700;
   margin: 30px 10px;
}
.logos{
    width: 100%;
    max-width: 190px;
    margin-right: 0;
    margin: 15% 20%;
}

</style>