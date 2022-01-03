<template>
    <div>
        <button @click="getProduct(1)">Show</button>  
         <h3>Product</h3>
        <div v-if="products.results">
           <p v-for="product in products.results"
           :key=product.id></p>
                
         </div>      
    </div>
</template>


<script>
export default {

    data(){
           return {
               products: []
           }
       },
    methods: {
        async getProduct (id) {
      try {               
        const response = await this.$axios.get(`/api/product/${id}`)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }

    },

     async getCategory (id) {
      try {               
        const response = await this.$axios.get(`/api/category/${id}`)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }

    },
    async getProductBySearchString (searchString) {
        try {               
            const response = await this.$axios.get(`/api/filterProducts`, { params:{
              name:"insence"
            }})
            
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }

        },


    
  }

}

//`/api/product/${id}`
///api/test
</script>
