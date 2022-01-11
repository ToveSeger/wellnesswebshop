<template>
  <div class="index-bg">   
    <Navigation/>    
    <SpecialOffer/>
    <Footer/>
  </div>
</template>

<script>
import Cart from "../src/components/Cart.vue"
import SpecialOffer from "../src/components/SpecialOffer.vue"
import Navigation from "../src/components/Navigation.vue"
import Footer from "../src/components/Footer.vue"
  export default {
    components: { Navigation, Cart, Footer, SpecialOffer }
}
</script>

<style scoped>
.index-bg{
  background-image: url("../src/assets/img/buddhaBeige.jpg");
  height: 100vh;
  background-position: center;
  background-size: cover;
}

</style>