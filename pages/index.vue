<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching products</p>   
    <ul v-else>
        <h1>Product</h1>
      <li v-for="product in products" :key="product.id">         
       name: {{product.name}}  id:{{product.id}}     
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
        try {               
          this.products = await this.$axios.get('/api/product/1')//fetch('/api/product/1').then((res) => res.json())
          console.log(response.data)
        } catch (err) {
          console.log(err)
        }

    }
 }
</script>