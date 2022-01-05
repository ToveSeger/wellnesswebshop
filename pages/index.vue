<template>
  <div>   
    <Navigation/> 
    <Footer/>
  </div>
</template>

<script>
import Navigation from "../src/components/Navigation.vue"
import Cart from "../src/components/Cart.vue"
import Footer from "../src/components/Footer.vue"
  export default {
    components: { Navigation, Cart, Footer }
}
</script>

<style scoped>


</style>