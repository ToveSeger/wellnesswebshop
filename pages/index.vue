<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching products</p>   
    <ul v-else>
        <h1>Product</h1>
      <li v-for="product in products" :key="product.id">         
       id:{{product.id}} name: {{product.name}}       
      </li>
    </ul>
  </div>
</template>
<script>
 export default {
    data() {
      return {
        products: []
      }

    },
      async fetch () {                      
          this.products = await this.$axios.get('/api/product/2').then(function (response) {
          console.log(response);
          return response.data;     
          }).catch(function (error) {
          console.log(error);
      });  
 }}
</script>