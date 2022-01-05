<template>
  <!-- <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching products</p>   
    <ul v-else>
        <h1>Product</h1>
       <li v-for="product in products" :key="product.id">         
        name: {{product.name}}      
      </li> 
      
    </ul>
  </div> -->
  
<div> 

  <h1>All products</h1>
  {{allProducts}}
  </div>
  
</template>
<script>
 export default {
    data() {
      return {
        products: [],
        allProducts: []
      }

    },
    async fetch () {       
      this.allProducts = await fetch(
        'http://localhost:3000/api/allproducts'
      ).then(res=>res.json()) }              
          /* this.products = await this.$axios.get('/api/product/2').then(function (response) {
          console.log(response);
          return response;     
          }).catch(function (error) {
          console.log(error); */
      // });
 }
</script>