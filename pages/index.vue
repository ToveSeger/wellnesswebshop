<template>
  <div class="index-bg">   
    <Navigation/>    
    <SpecialOffer/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "../src/components/Navigation.vue"
import Cart from "../src/components/Cart.vue"
import Footer from "../src/components/Footer.vue"
import SpecialOffer from "../src/components/SpecialOffer.vue"
import GetImage from "../src/components/GetImage.vue"
  export default {
    components: { Navigation, Cart, Footer, SpecialOffer, GetImage }
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