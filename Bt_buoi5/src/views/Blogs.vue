<template>
  <div class="blog">
    <h2>Blogs</h2>
    <div class="post" v-for="item in list" :key="item">
      <div class="image">
        <img :src="item.thumbnail" :alt="item.title" />
      </div>
      <div class="text">
        <h2 class="title">{{ item.title }}</h2>
        <p class="categoryId">{{ item.categoryId }}</p>
        <p class="content">{{ item.content }}</p>
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
          id: "2",
          categoryId: "UI developer",
          createdAt: "2021-04-23T09:07:41.855Z",
          title: "cross-platform",
          thumbnail: "http://lorempixel.com/640/480/animals",
          description: "Legacy",
          content:
            "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!",
        },
        {
          id: "3",
          categoryId: " UX developer ",
          createdAt: "2021-04-23T14:57:39.459Z",
          title: "Bedfordshire",
          thumbnail: "http://lorempixel.com/640/480/transport",
          description: "Investor",
          content:
            "If we transmit the bandwidth, we can get to the SCSI microchip through the back-end JBOD hard drive!",
        },
        {
          id: "4",
          categoryId: " UI developer ",
          createdAt: "2021-04-23T13:31:36.828Z",
          title: "programming application quantify",
          thumbnail: "http://lorempixel.com/640/480/city",
          description: "Dynamic",
          content:
            "Use the redundant TCP capacitor, then you can parse the redundant monitor!",
        },
        {
          id: "6",
          categoryId: "Vue developer",
          createdAt: "2021-04-23T21:46:59.584Z",
          title: "Ergonomic Cotton Bacon",
          thumbnail: "http://lorempixel.com/640/480/cats",
          description: "Senior",
          content:
            "You can't back up the driver without backing up the open-source EXE transmitter!",
        },
        {
          id: "7",
          categoryId: " UI developer ",
          createdAt: "2021-04-23T18:21:17.130Z",
          title: "Baby",
          thumbnail: "http://lorempixel.com/640/480/technics",
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
.blog {
  max-width: 600px;
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 20px 50px;
  border: 1px solid black;
  font-family: "Courier New", Courier, monospace;
  font-size: 13px;
}
.h2 {
  font-size: 15px;
  text-transform: capitalize;
  font-weight: 700;
  font-style: italic;
}
.post {
  display: flex;
  margin: 10px 0;
  cursor: pointer;
}
.image {
  width: 25%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.text {
  width: 70%;
  padding-left: 10px;
  text-align: left;
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
</style>
