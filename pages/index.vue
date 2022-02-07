//Technical Documentation: 3.5
<template>
  <body> 
      <div class="container">  
        <div class="banner">
          <NuxtLink to="/productdetails/56">
          <img src="../src/assets/img/TheSecret_banner.png" alt="">
          </NuxtLink>
          </div>     
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching products</p>   
          <ul v-else class="grid">
            <div v-for="product in outletProducts.slice(0,5)" :key="product.id" class="card" >         
                    <ProductCardSlim :product="product"/>              
            </div>
            <NuxtLink type="button" to="/outlet" class="btn btn-light">Take me to the outlet!</NuxtLink>
          </ul>
    </div>  
  </body>
</template>

<script>

import Search from "../src/components/Search.vue"
import GetLargeImage from "../src/components/GetLargeImage.vue";
import ProductCardSlim from "../src/components/ProductCardSlim.vue";


  export default {
         data:()=> ({
             outletProducts:[]
    }), 

      async fetch() {
        try{
            this.outletProducts = await this.$axios.$get(`http://localhost:3000/api/outlet`)     
        }catch(err){
            console.log(err)
        }
    },
       components: {Search, ProductCardSlim, GetLargeImage }
}
</script>

<style scoped>

.container{
  margin-top:2em;
  height:100vh;
  margin-bottom:10em;
  width:95vw;
  margin-left:auto;
  margin-right: auto;
}

.banner img{
  max-width:90%;
  border: 0.5em solid #177585;
  margin-left:5em;
}
.grid{
  margin-top:2em;
  display:grid;
  grid-template-columns: 33% 33% 33%;
  gap:1em;
}

.btn-light{
  color: #177585;
  max-height:4em;
  max-width:19em;  
  margin-top:6em; 
  margin-left:1.5em;
  font-weight: bold;
  font-size:clamp(0.8rem, 0.8rem + 0.3vw, 1.5rem);
  border: 0.4em solid  #177585;
  padding-top:0.8em;
}

.card{
  max-width:25em;
}

.search{
  margin-left:10em;
}

@media all and (max-width: 1050px){
    .grid{
    grid-template-columns: 50% 50%;
  }

}


@media all and (max-width: 750px){
    .grid{
    grid-template-columns: 100%;
    width:80vw;
  }

  .banner img{
  max-width:95%;
  border: 0.5em solid #177585;
  margin-left:2em;
  }
}

</style>