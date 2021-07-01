<template>
  <div class="default__layout">
      <Navbar />
    <div class="containers">
    <div class="container-lefts">
        <Sidebar />
    </div>
     <div class="container-right">
        <slot />
     </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/common/Navbar.vue'
import Sidebar from '../components/common/Sidebar.vue'
export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>
.containers{
    position: relative;
    z-index: 3;
    display: flex;
    width: 100%;
    max-width: none;
    background-color: transparent;
}
.container-right{
  width: 80%;
  display: block;
    overflow: visible;
    height: auto;
    max-width: 960px;
    min-height: 0;
    min-width: 0;
    margin-left: 0;
    padding-top: 24px;
}
.container-lefts{
  width: 20%;
  display: block;
    overflow: visible;
    height: auto;
    max-width: 960px;
    min-height: 0;
    min-width: 0;
    margin-left: 0;
    padding-top: 24px;
   padding-right: 36px;
}
</style>