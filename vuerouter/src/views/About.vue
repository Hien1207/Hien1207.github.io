<template>
  <div >
    <div class="container">
    <div class="container-left"  style="margin-top:100px">
        <h1 class="hero__header">Our mission</h1>
        <p class="p-text">We believe that technology can clean up messy, monotonous, and complex tasks to create space for more meaningful work. So many people have their time monopolized by tedious, unnecessary data entry.
           <br>
           <br>
            <strong>Our mission is to help make your data, your time, and your energy more meaningful.</strong>
            <br>
            <br>
          We’re doing this by handing you the keys to some truly powerful technologies so you can drive the automation process yourself even if you have no prior experience. This is machine learning for the people.
        </p>
      
    </div>
     <div class="container-left">
       <img src="https://assets-global.website-files.com/5e3898dff507782a6580d710/607618a67c032394d7d39e96_true%20autoML.svg" class="contained-image">
     </div>
    </div>
    <div class="container" style="display:block; "> 
      <div class="narrow-section--centered">
         <h2 class="heading--narrow">Discovering a better way to manage data</h2>
         <br>
         <p class="centered">
           As businesses have become increasingly digital, visual forms of data like images, videos, PDFs, and documents have exploded in volume. Traditional tools like databases, spreadsheets, and dashboards are ill-equipped to manage this kind of content. As a result, countless teams are spending precious time manually handling data across multiple systems. This is a major problem.
           <br>
           <br>
           At Impira, we realized that re-engineering the data processing stack with AI at its core could unlock useful information buried within files and documents so you can do your job. Our product is ambitious — we aim to unleash incredible amounts of productivity by cataloging, analyzing, and interpreting visual data at scale.
           <br>
           <br>
           We’re leveling the playing field to allow anyone and everyone to do this. Impira’s intuitive user interface allows any user to create, deploy, and train machine learning models with just a few clicks. This kind of freedom empowers the masses to realize their productivity potential by taking back their time and energy.
          <br>
         </p>
      </div>
    </div>
    <div class="container" style="display:block; margin-top:100px "> 
      <div class="narrow-section--centered">
         <h2 class="heading--narrow">Our team</h2>
         <br>
         <p class="centered">
          We’re dedicated to building powerful technologies, but we build them to help actual, real people. Being people-centric is baked into our foundation and that’s reflected in how we build our team and why Impira was built at all.
           <br>
           <br>
           Meet the people behind the scenes turning the knobs and pulling the levers that make Impira come to life.
           <br>
         </p>
      </div>
    </div>
    <div class="container" style="display:block;"> 
      <div class="layout-grid">
         <div class="feature-card">
           <div style="background-image:url(https://assets-global.website-files.com/5e3898dff5077817ea80d71c/60aea484bc8d834b32902b8b_Amy-1-min.png)" class="image-container">
             <img id="image" src="https://assets-global.website-files.com/5e3898dff5077817ea80d71c/60aea482bc8d83bf78902b8a_Amy-min.png" class="image-container">
             <h6 class="feature-card__heading">Amy Le</h6>
             <div>Senior Product Designer</div>
             <a href="http://www.linkedin.com/in/pleamy" class="job-link">Linkedin</a>
           </div>
         </div>
         <div class="feature-card">
           <div style="background-image:url(https://assets-global.website-files.com/5e3898dff5077817ea80d71c/60aea4b8a98f02674576e0ac_Anand-1-min.png)" class="image-container">
             <img id="image" src="https://assets-global.website-files.com/5e3898dff5077817ea80d71c/60aea4b6f2661922bbca62da_Anand-min.png" class="image-container">
             <h6 class="feature-card__heading">Anand Mariappan</h6>
             <div>VP of Engineering</div>
             <a href="https://www.linkedin.com/in/anandmariappan/" class="job-link">Linkedin</a>
           </div>
         </div>
         <div class="feature-card">
           <div style="background-image:url(https://assets-global.website-files.com/5e3898dff5077817ea80d71c/60aea3b0beb29e46165ca691_Ankur-1-min.png)" class="image-container">
             <img id="image" src="https://assets-global.website-files.com/5e3898dff5077817ea80d71c/60aea3ac042b6e60559f4d6c_Ankur-min.png" class="image-container">
             <h6 class="feature-card__heading">Ankur Goyal</h6>
             <div>Co-founder and CEO</div>
             <a href="https://www.linkedin.com/in/ankrgyl/" class="job-link">Linkedin</a>
           </div>
         </div>
         <div class="feature-card">
           <div style="background-image:url(https://assets-global.website-files.com/5e3898dff5077817ea80d71c/60aea549a98f021fe876e3b6_Austin-1-min.png)" class="image-container">
             <img id="image" src="https://assets-global.website-files.com/5e3898dff5077817ea80d71c/60aea547f2661919c5ca6a79_Austin-min.png" class="image-container">
             <h6 class="feature-card__heading">Austin Moehle</h6>
             <div>Software Engineer</div>
             <a href="https://www.linkedin.com/in/austinmxx/" class="job-link">Linkedin</a>
           </div>
         </div>
      </div>
    </div>
    <div class="container" style="display:block; margin-top:70px ; margin-bottom:25px"> 
      <div class="narrow-section--centered">
         <h2 class="heading--narrow">Join us</h2>
         <br>
         <p class="centered">
         We’re a quickly growing team headquartered in San Francisco.
           <br>
         </p>
         <div class="email-form"> 
              <a class="form">See open positions</a>
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
  width: 40%;
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
.hero__header{
  margin-top: 0;
    margin-bottom: 24px;
    font-size: 80px;
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
.contained-image{
  width: 100%;
    max-width: 600px;
    margin-right: 0;
    margin-left: 0;
    padding: 32px 0 32px 32px;
    align-self: center;
}
.narrow-section--centered{
  display: flex;
    max-width: 920px;
    margin-right: auto;
    margin-left: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
h2{
    margin-top: 36px;
    margin-bottom: 16px;
    color: #0f0f0f;
    font-size: 50px;
    line-height: 1.1;
    font-weight: 400;
}
h6{
    margin-top: 10px;
    margin-bottom: 6px;
    color: #0f0f0f;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 400;
}
.heading--narrow{
  max-width: 720px;
}
.centered{
    display: flex;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    align-self: center;
    text-align: center;
}
p{
    margin-top: 0;
    margin-bottom: 16px;
    border: 1px #0f0f0f;
    color: #3f3f3f;
    font-size: 16px;
    line-height: 1.65;
    font-weight: 400;
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
    background-color: #0f0f0f;
    color: #fff;
    line-height: 2;
    font-weight: 500;
    letter-spacing: .25px;
    cursor: pointer;
    transition:all 0.5s ease-in-out ;
}
.form:hover{
  background: white;
  color: black;
  border:2px solid black;
  text-decoration: none;
}
.layout-grid{
  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.feature-card{
  width: 16%;
    padding: 16px 50px;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}
.image-container{
    width: 275px;
    height: 275px;
    max-height: 275px;
    max-width: 275px;
    justify-content: flex-end;
    background-image: url(https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg);
    background-position: 50% 50%;
   background-size: 100%;
   cursor: pointer;
}
img{
  display: block;
  opacity: 1;
  transition:all 0.5s ease-in-out ;
}
#image:hover{
  opacity: 0;
}
.superhero{
   background: orange;
   height: 100px;
}
.job-link{
    margin-top: 26px;
    color: #9b9a9a;
}
</style>
