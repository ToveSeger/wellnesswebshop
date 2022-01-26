<template>
    <div class="container">
{{itemsInCart}}
<button @click="placeOrder(44)">place order</button>
<button @click="updateProduct()">update product</button>
<button @click="updateOrder()">update order</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        computed: {
            ...mapState([
                "itemsInCart"
        ])
      },

        data:()=>{
            return{             
                cartSum: 0
            }

        },

      methods: {
          async placeOrder(customerId){
        console.log("customer id sent: " + customerId)
        console.log(this.itemsInCart)
        console.log(this.cartSum)
         const order = await this.$axios.$post('http://localhost:3000/api/postorder',{
            customer_id: customerId,
            products: this.itemsInCart,// this.getProductIds(), //foreach prod in itemsincart samla id i en array
            order_sum: this.cartSum
            }) 

            console.log("order: " + order)      
        },

        async updateProduct(){
        
     
         const product = await this.$axios.$put('http://localhost:3000/api/updateproduct/120',{
           
            order_id: 11,// this.getProductIds(), //foreach prod in itemsincart samla id i en array
          
            }) 

            console.log("product: " + product) 
        },

          async updateOrder(){
        
     
         const order = await this.$axios.$put('http://localhost:3000/api/updateorder/13',{
           
            products: this.itemsInCart,// this.getProductIds(), //foreach prod in itemsincart samla id i en array
          
            }) 

            console.log("Order: " + order) 
        }
    }
}

</script>

<style scoped>
.container{
    margin-top:12em;
}
</style>