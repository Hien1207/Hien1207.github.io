<template>
  <div>
    <div class="container" style="margin-bottom:50px">
    <div class="container-left">
      <div>
        <img :src="activeBlog.thumbnail" :alt="activeBlog.title" />
      </div>
    </div>
     <div class="container-left">
      <div>
        <h1 class="titled">{{ activeBlog.title }}</h1>
        <p class="textd">{{ activeBlog.categoryId }}</p>
        <p class="textd">{{ activeBlog.content }}</p>
        <p class="contentt">Artificial Intelligence (AI) can be confusing. AI is a broad term that covers a wide range of applications, 
          and while we see AI technologies performing a swath of incredible feats such as Google Translate, AlphaGo, and solving a
          rubik's cube, it can be hard to tell which business problems AI is apt to solve. Matching a given problem to an AI solution
           often comes down to framing: sometimes what appears as an intractable problem can, with minor tweaks, become the kind of proble
           AI excels at solving. </p>     
       <p class="contentt">At Impira, we’ve been fortunate to work through these challenges with customers across a variety of industries, departments,
          and use cases. As part of that process, we’ve developed an internal framework to help customers evaluate how AI can be used 
          to automate their manual workflows around unstructured data (i.e., images, videos, and scanned documents). Here, we’ll share 
          how we think about that framework and some examples of problems for which AI can make a meaningful difference.</p>
       </div>
     </div>
    </div>
</div>
</template>

<script>
export default {
  name: "blogdetail",
  computed: {
    activeBlog() {
      return this.list[this.$route.params.id-1];
    },
  },
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
.titled {
  text-transform: capitalize;
  margin-bottom: 10px;
  font-size: 40px;
}
.textd{
  font-size: 20px;
  color: gray;
  margin-bottom: 5px;
}
.contentt{
  font-size: 18px;
}
</style>