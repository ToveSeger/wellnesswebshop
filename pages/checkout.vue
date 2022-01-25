<template>
    <div class="container">
        <div class="innerContainer">
                <div>
                    <h2>Your Products</h2>
                     <Cart
                    v-for="item in itemsInCart"
                    :key="item.id"
                    :item="item"/>              
                </div>
                <div class="cartTotal">
                  <h5>{{"Total sum: " + cartSum}}</h5>
                </div>
        </div>
        <div class="shippingInformation">
        <h2>Shipping information</h2>
        <form @submit.prevent="submitForm">
            <label>First name: </label>
            <input type="text" class="form-control" v-model="firstName" required>
            <label>Last name: </label>
            <input type="text" class="form-control" v-model="lastName" required>
            <label>Street & house number: </label>
            <input type="text" class="form-control" v-model="road" required>
            <label>Zip code: </label>
            <input type="text" pattern="[0-9]*" class="form-control" v-model="zipCode" required>
            <label>Email: </label>
            <input type="email" class="form-control" v-model="email" required>
            <small class="form-text text-muted">Your email stays with us</small>
            <label>Phone: </label>
            <input type="tel" class="form-control" v-model="phone" required>
            <div class="checkboxContainer">
                <div class="checkbox">
                    <input type="checkbox" class="form-check-input" value="" id="flexCheckDefault" required>
                </div>
                <div class="checkboxLabel">
                    <label>I accept the terms</label>
                </div>
            </div>
            <div v-if="!pressed">
            <button type="submit" class="btn btn-info">Confirm order</button>
                <!-- <button @click="placeOrder(customer.id)">place order</button> -->
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
    </div>
</template>

<script>
import Cart from "../src/components/Cart.vue";
import OrderConfirmation from "../src/components/OrderConfirmation.vue";
import { mapState, mapMutations } from 'vuex';
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
       
        this.placeOrder(customer.id)     
      
    },

  //creates a new instance in order table   
    async placeOrder(customerId){
        console.log("customer id sent: " + customerId)
        console.log(this.itemsInCart)
        console.log(this.cartSum)
         const order = await this.$axios.$post('http://localhost:3000/api/postorder',{
            customer_id: customerId,
            products: this.itemsInCart,// this.getProductIds(), //foreach prod in itemsincart samla id i en array
            order_sum: this.cartSum
            }) 

            console.log("order id: " + order.id)
            this.order=order
            this.pressed=true  
            this.$store.commit('EMPTY_CART')
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
    position:relative;
}

h2{
    font-family: 'Signika', sans-serif;
    color: #177585;
    text-decoration:underline;
    width:10em;
    margin:auto;
}

.cartTotal{
    font-family: 'Signika', sans-serif;
    margin:auto;
    position: absolute;
    margin:auto;
    width:10em;
    left:30em;
    padding:0.5em;
}

.shippingInformation{
    margin-top:5em;
}
.shippingInformation h2{
  margin-bottom:1em;
}

form{
    display:flex;
    flex-direction: column;
    width:25em;
    margin-top:2em;
    margin:auto;
    position:relative;
}

.checkboxContainer{
    display:flex;
}
.checkbox{
    margin-top:1.2em;
    width:2.5em;
}

.checkboxLabel{
    padding-top:1em;
    height:2em;
    margin-bottom:1.5em;
}

.btn-info{
    width:10em;
    position:absolute;
    left:7.5em;
}

input{
    width:25em;
}

</style>