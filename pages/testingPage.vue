<template>
    <div class="container">
{{itemsInCart}}
<button @click="placeOrder(44)">place order</button>
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
    }
}

</script>

<style scoped>
.container{
    margin-top:12em;
}
</style>