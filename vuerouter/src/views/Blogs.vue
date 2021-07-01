<template>
  <div>
    <div class="container">
    <div class="container-left"  style="margin-top:60px">
        <strong> Company / 2  min read</strong>
        <br>
        <br>
        <a href="/blog/announcing-our-zapier-integration" class="inline-block">
           <h1 class="hero__header">Announcing our Zapier integration</h1>
        </a>
        <strong style="font-weight:500">By the team at Impira / June 22, 2021 </strong>
        <br>
        <br>
        <p class="p-text">At Impira, we’re driven by the goal of removing repetitive manual tasks that hamper productivity and keep you from doing what you do best. Sometimes, we’re able to link arms with other like-minded solutions to give our users more opportunities to save themselves from data entry dread.</p>
        <div class="email-form"> 
              <a class="form">Try for free</a>
            </div>
    </div>
     <div class="container-left">
       <img src="https://assets-global.website-files.com/5e3898dff5077817ea80d71c/60ca686e9c2e661b9c44c9d9_202106-zapier%20x%20impira-square.png" class="contained-image">
     </div>
    </div>
    <div class="container" style="margin: 5% 8%">
      <div class="post" v-for="item in list" :key="item" @click="$router.push('/blog/' + item.id)">
      <div class="image">
        <img :src="item.thumbnail" :alt="item.title" />
      </div>
      <div class="text">
        <h4 class="title">{{ item.title }}</h4>
        <p class="categoryId">{{ item.categoryId }}</p>
        <p class="content">{{ item.content }}</p>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog",
  data: () => {
    return {
      list: [
        {
          id: "1",
          categoryId: "UI developer",
          createdAt: "2021-04-23T09:07:41.855Z",
          title: "cross-platform",
          thumbnail: "https://assets-global.website-files.com/5e3898dff5077817ea80d71c/602368e608f00aa08d892242_Impira%20AutoML-half-min.png",
          description: "Legacy",
          content:
            "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!",
        },
        {
          id: "2",
          categoryId: " UX developer ",
          createdAt: "2021-04-23T14:57:39.459Z",
          title: "Bedfordshire",
          thumbnail: "https://assets-global.website-files.com/5e3898dff5077817ea80d71c/5ffe2c58bd6dfb7fb7390e37_IDC%20podcasts%40half-min.png",
          description: "Investor",
          content:
            "If we transmit the bandwidth, we can get to the SCSI microchip through the back-end JBOD hard drive!",
        },
        {
          id: "3",
          categoryId: " UI developer ",
          createdAt: "2021-04-23T13:31:36.828Z",
          title: "programming application quantify",
          thumbnail: "https://assets-global.website-files.com/5e3898dff5077817ea80d71c/5e3a71a0d565b243a03a300f_chair%20with%20cat500x500-min.png",
          description: "Dynamic",
          content:
            "Use the redundant TCP capacitor, then you can parse the redundant monitor!",
        },
        {
          id: "4",
          categoryId: "Vue developer",
          createdAt: "2021-04-23T21:46:59.584Z",
          title: "Ergonomic Cotton Bacon",
          thumbnail: "https://assets-global.website-files.com/5e3898dff5077817ea80d71c/5e67ca67a22e4e9f8038cb14_evaluating-AI500x500.png",
          description: "Senior",
          content:
            "You can't back up the driver without backing up the open-source EXE transmitter!",
        },
        {
          id: "5",
          categoryId: " UI developer ",
          createdAt: "2021-04-23T18:21:17.130Z",
          title: "Baby",
          thumbnail: "https://assets-global.website-files.com/5e3898dff5077817ea80d71c/5e7a2ac929bff5a8de51a5df_what%20not%20how500x500.png",
          description: "Lead",
          content:
            "Try to transmit the IB sensor, maybe it will input the cross-platform transmitter!",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.h2 {
  font-size: 15px;
  text-transform: capitalize;
  font-weight: 700;
  font-style: italic;
}
.post {
  display: block;
  margin: 10px 0;
  cursor: pointer;
  margin-right: 35px;
}
.image {
  width: 230px;
  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    transition:transform .5s; ;
    opacity: 0.8;
  }
  img:hover{
     transform: scale(0.8);
  }
}
.text {
  width: 200px;
  padding-left:10px;
  text-align: center;
}
.title {
  text-transform: capitalize;
  margin-bottom: 5px;
}
.categoryId {
  margin: 5px 0;
  color: gray;
}
.content {
  color: gray;
}
a{
    background-color: transparent;
    color: black;
    text-decoration: none;
}
.inline-block{
  max-width: 100%;
  display: inline-block;
  margin-bottom: 20px;
}
a:hover{
  text-decoration: underline;
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
.contained-image{
  width: 100%;
    max-width: 600px;
    margin-right: 0;
    margin-left: 0;
    padding: 32px 0 32px 32px;
    align-self: center;
}
.hero__header{
  margin-top: 0;
    margin-bottom: 24px;
    font-size: 80px;
    line-height: 1;
    text-align: left;
    font-weight: 1;
}
</style>
