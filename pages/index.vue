<template>
  <div class="index-bg"> 
      <div>       
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching products</p>   
          <ul v-else class="grid">
            <div v-for="product in outletProducts.slice(0,3)" :key="product.id" class="card" >         
                    <ProductCard :product="product"/>              
            </div>
            <NuxtLink type="button" to="/outlet" class="btn btn-light">Show me everything in the outlet!</NuxtLink>
          </ul>
    </div>  
  </div>
</template>

<script>

import Search from "../src/components/Search.vue"
import ProductCard from "../src/components/ProductCard.vue";
import GetLargeImage from "../src/components/GetLargeImage.vue";


  export default {
    components: {Search, ProductCard, GetLargeImage },

     //props:['product'],
         data:()=> ({

             productId: 55,
             outletProducts:[]
    }), 

      async fetch() {
        try{
            this.outletProducts = await this.$axios.$get(`http://localhost:3000/api/outlet`)     
        }catch(err){
            console.log(err)
        }
    },
      components: { ProductCard }
}
</script>

<style scoped>

.index-bg{
  background-image: url("../src/assets/img/buddha_orderConfirmation.jpg");
  height: 80vh;
  background-repeat: no-repeat;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
}

.grid{
  width:73vw;
  display:grid;
  grid-template-columns: 50% 50%;
  margin-left:21vw;
}

.btn-light{
  color: #177585;
  height:5em;
  width:25em;
  margin:auto;
  font-weight: bold;
  font-size:1.2em;
  border: 0.5em solid  #177585;
  padding:1em;
}



.search{
  margin-left:10em;
}
</style>