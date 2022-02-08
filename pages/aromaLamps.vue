//Technical Documentation: 3.1
<template>    
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching products</p>   
          <main v-else class="flex" >
              <div class="sorting">
                <button class="btn btn-light" @click="sortProductsByPrice('asc', categoryId)">
                    <span class="tooltiptext">Sort products by price in ascending order</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down" viewBox="0 0 16 16">
                    <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
                    </svg>
                </button>
                <button  class="btn btn-light" @click="sortProductsByPrice('desc', categoryId)"> 
                    <span class="tooltiptext">Sort products by price in descending order</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16">
                    <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
                    </svg>
                </button>
                <button class="btn btn-light" @click="sortProductsByName('asc', categoryId)">
                    <span class="tooltiptext">Sort products by name in ascending order</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
                    <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
                    </svg>
                </button>
                <button class="btn btn-light" @click="sortProductsByName('desc', categoryId)">
                        <span class="tooltiptext">Sort products by name in descending order</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-alpha-up-alt" viewBox="0 0 16 16">
                    <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
                    <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
                    <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"/>
                    </svg>
                </button>
              </div>
              <article v-if="mobileOrTablet">
                <div v-for="product in allProducts" :key="product.id" class="cardComponent" >         
                    <ProductCard_mobile :product="product"/>     
                </div>         
              </article>
              <article v-else>
                <div v-for="product in allProducts" :key="product.id" class="card" >         
                        <ProductCard :product="product"/>              
                </div>
              </article>
        </main>
</template>

<script>
import ProductCard from "../src/components/ProductCard.vue";
import ProductCard_mobile from "../src/components/ProductCard_mobile.vue";
    export default {     

         data:()=> ({
             allProducts:[],
             categoryId: 16,
             mobileOrTablet: 0  
    }), 

       mounted() {  
        this.mobileOrTablet = window.innerWidth<1100    
        window.onresize = () => {
        this.mobileOrTablet = window.innerWidth <1100
        }
    },

 
    async fetch() {
        try{
            this.allProducts = await this.$axios.$get(`http://localhost:3000/api/productbycategory/${this.categoryId}`)     
            }catch(err){
            console.log(err);
        }
    },

methods:{
         async sortProductsByPrice(requestedOrder) {
        try{
            this.allProducts = await this.$axios.$get(`http://localhost:3000/api/aromalamps/${requestedOrder}`)     
        }catch(err){
            console.log(err)
        }
    },

     async sortProductsByName(requestedOrder) {
        try{
            this.allProducts = await this.$axios.$get(`http://localhost:3000/api/aromalamps/${requestedOrder}`)     
        }catch(err){
            console.log(err)
        }
    },
    },
    

    components: { ProductCard, ProductCard_mobile }
}


</script>

<style scoped>
    .flex{
        margin:auto;
        width:70vw;
        margin-bottom:10em;
        margin-top:5em;
    }

    .card{
        height:20em;
        margin:2em;
    }

       .btn-light .tooltiptext{
        visibility:hidden;
        position:absolute;
        z-index:1;
        color:#fff;
        background-color: rgb(109, 106, 106);
        padding:0.2em;
    }

     .btn-light:hover .tooltiptext {
        visibility:visible;
    }

    @media all and (max-width: 1250px){ 
    .flex{
        width:90vw;
    }
}
@media all and (max-width: 1100px){
    .card{
    height:25em;

    }

    .flex{
        width:90vw;
    }
    
}

</style>