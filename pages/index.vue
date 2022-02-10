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
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
            </svg>
            <p>Take me to the outlet!</p>
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
  font-family: 'Roboto Condensed', sans-serif;
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
  max-height:5em;
  max-width:15em;  
  margin-top:6em; 
  margin-left:1.7em;
  font-weight: 700;
  font-size:clamp(0.8rem, 1rem + 0.3vw, 1.5rem);
  border: 0.4em solid  #177585;
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