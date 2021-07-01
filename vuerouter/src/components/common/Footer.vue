<template>
<div>
  <div class="footer">
      <div class="footer-col" style="margin-left:5%">
            <img src="https://s3.amazonaws.com/drift-public-prod/1364422/614989dd83b0c129e6cb26c22a8fac89vbeu573vd7iw" class="logo-icons">
      </div>
      <div  class="footer-col"> 
             <div class="values"> 
               <h6 >Contact</h6>
               <p>333 Bryant St. #340
                 <br><br>
                 San Francisco, CA 94107
                 <br><br> 
                 <a href="mailto:info@impira.com?subject=Learn%20more%20about%20Impira">info@impira.com</a>
                </p>
            </div>
      </div>
       <div  class="footer-col" > 
             <div > 
               <h6 style="margin-left:0px">Social</h6>
               <p><a href="https://www.facebook.com/ImpiraHQ/">Facebook</a>
                 <br><br>
                 <a href="https://twitter.com/ImpiraHQa">Twitter</a>
                 <br><br> 
                 <a href="https://www.linkedin.com/company/impira/">Linkedin</a>
                </p>
            </div>
      </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
  display: flex;
  font-family: Matter,sans-serif;
  width: 100%;
  height: 250px;
  border-top: 1px solid black;
}
.footer-col{
    width: 30%;
    margin: 20px ;
}
.logo-icons{
    width: 100%;
    max-width: 190px;
    margin-right: 0;
    margin: 0% 40%;
}
.values{
  margin-left:20%;
}
h6{
    margin-top: 0;
    margin: 26px 30px;
    color: #0f0f0f;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 400;
}
a{
    background-color: transparent;
    color: black;
    text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
</style>