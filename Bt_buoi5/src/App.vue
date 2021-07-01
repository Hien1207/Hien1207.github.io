<template>
  <div id="app">
    <div id="nav">
      <button class="button" @click="$router.go(-1)">Back</button> |
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact  </router-link> |
      <router-link to="/blog">Blogs</router-link>
    </div>
    <transition name="slide-fade" mode="out-in">
    <router-view />
    </transition>
  </div>
</template>

<style lang="less">
#app {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
        }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.button{
    width: 60px;
  height: 30px;
  font-size: 20px;
  margin: 4px;
  color: rgb(6, 129, 82);
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
