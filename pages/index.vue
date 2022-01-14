<template>
  <div class="index-bg"> 
    <div class="flex">
    <SpecialOffer :product=productOffer />
    </div>
  </div>
</template>

<script>

import SpecialOffer from "../src/components/SpecialOffer.vue"
import Search from "../src/components/Search.vue"
import ProductCard from "../src/components/ProductCard.vue";


  export default {
    components: { SpecialOffer, Search, ProductCard },

     props:['product'],
         data:()=> ({
             productOffer:[],
             productId: 55,
    }), 

    async fetch() {
        try{
            this.productOffer = await this.$axios.$get(`http://localhost:3000/api/product/${this.productId}`)     
            }catch(err){
            console.log(err);
        }
    },
}
</script>

<style scoped>
.index-bg{
  background-image: url("../src/assets/img/buddhaBeige.jpg");
  height: 100vh;
  background-position: center;
  position:fixed;
  top:7;
  left:0;
  right:0;
  background-size: cover;
}

.flex{
  display:flex;
  justify-content: center;
  margin-top:15em;
}

.search{
  margin-left:10em;
}
</style>