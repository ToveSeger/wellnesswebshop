//Technical Documentation: 3.5
<template> 
      <main class="container">  
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching products</p>   
          <div v-else class="grid">
            <article v-for="product in outletProducts.slice(0,5)" :key="product.id" class="card" >         
                    <ProductCardSlim :product="product"/>              
            </article>
            <NuxtLink type="button" to="/outlet" class="btn btn-light">
            Take me to the outlet!
            </NuxtLink>
          </div>
    </main>  
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
  max-width:80vw;
  margin-left:auto;
  margin-right: auto;
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
  max-height:50vh;
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

}

</style>