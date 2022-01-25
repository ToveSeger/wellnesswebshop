<template>
    <div class="container">
        <div class="innerContainer">
                <div>
                    Your products:
                     <Cart
                    v-for="item in itemsInCart"
                    :key="item.id"
                    :item="item"/>              
                </div>
        </div>
        <h1>Shipping information</h1>
        {{"cart sum: " + cartSum}}
        <form @submit.prevent="submitForm">
            <label>First name: </label>
            <input type="text" v-model="firstName" required>
            <label>Last name: </label>
            <input type="text" v-model="lastName" required>
            <label>Street & house number: </label>
            <input type="text" v-model="road" required>
            <label>Zip code: </label>
            <input type="text" pattern="[0-9]*" v-model="zipCode" required>
            <label>Email: </label>
            <input type="email" v-model="email" required>
            <label>Phone: </label>
            <input type="tel" v-model="phone" required>
            <label>I accept the terms</label>
            <input type="checkbox" required>
            <div v-if="!pressed">
                <button type="submit">Confirm order</button>
                <button @click="placeOrder(customer.id)">place order</button>
            </div>
            <div v-else>
                <p>Thanks for your order  {{firstName}}!</p>
                <OrderConfirmation
                :customer="customer"
                :order="order"
                />
            </div>


        </form>
    </div>
</template>

<script>
import Cart from "../src/components/Cart.vue";
import OrderConfirmation from "../src/components/OrderConfirmation.vue";
import { mapState } from 'vuex';
    export default {
    
        data:()=>{
            return{
                firstName: " ",
                lastName: " ",
                email: " ",
                phone: null,
                road: " ",
                zipCode: null,
                pressed: false,
                customer: {},
                order: {},
                cartSum: 0
            }

        },
        
        computed: {
            ...mapState([
                "itemsInCart"
        ])
    },

    mounted(){
        this.cartSum = this.$store.getters.getCartSum
    },

    methods:{
        async  submitForm(){
//creates a new instance in customer table
        const customer = await this.$axios.$post('http://localhost:3000/api/postcustomer',{
                    first_name: this.firstName,
                    last_name: this.lastName,
                    phone: parseInt(this.phone),
                    email: this.email,
                    road: this.road,
                    zip_code: parseInt(this.zipCode)
            })   

             console.log("customer: " + customer)
            this.customer=customer
       
       //creates a new instance in order table     
       

       /*  getProductIds(){
            const productIds = []
            this.itemsInCart.forEach(item => {
                productIds.push(item.id)
            });

            return productIds
        }    */    
            
    },

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
            this.order=order
            this.pressed=true
        },
    },
            components: { Cart, OrderConfirmation }
}
</script>

<style  scoped>

.container{
    margin-bottom:10em;
}
.innerContainer{
    margin-top:12em;
}

form{
    display:flex;
    flex-direction: column;
}

input{
    width:15em;
}

</style>