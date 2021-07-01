<template>
  <div class="default__layout">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/common/Navbar.vue'
import Footer from '../components/common/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

</style>