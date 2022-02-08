//Technical Documentation: 3.3
<template>
    <body class="container">
        <main v-if="!pressed">
            <article class="innerContainer">
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
            </article>
            <article class="shippingInformation">
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
                    <label>City: </label>
                    <input type="text"  class="form-control" v-model="city" required>
                    <label>Email: </label>
                    <input type="email" class="form-control" v-model="email" required>
                    <small class="form-text text-muted">Your email stays with us</small>
                    <label>Phone: </label>
                    <input type="tel" class="form-control" v-model="phone" required>
                    <NuxtLink  target="_blank" class="linkToTerms" to="/termsandconditions"> 
                    Read the terms
                    </NuxtLink> 
                    <div class="checkboxContainer">
                        <div class="checkbox">
                            <input type="checkbox" class="form-check-input" value="" id="flexCheckDefault" required>
                        </div>
                        <div class="checkboxLabel">
                        <label>I accept the terms</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-info">Confirm order</button>
                    </form>
            </article>
        </main>
            <article v-else class="orderConfirmation">
                <OrderConfirmation
                :customer="customer"
                :order="order"
                />
            </article>
    </body>
</template>

<script>
import Cart from "../src/components/Cart.vue";
import OrderConfirmation from "../src/components/OrderConfirmation.vue";
import { mapState, mapMutations, mapGetters } from 'vuex';
    export default {
    
        data:()=>{
            return{
                firstName: " ",
                lastName: " ",
                email: " ",
                phone: null,
                road: " ",
                zipCode: null,
                city: " ",
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
        //Triggers when "comfirm order" is pressed
        async  submitForm(){
//creates a new instance in customer table
        const customer = await this.$axios.$post('http://localhost:3000/api/postcustomer',{
                    first_name: this.firstName,
                    last_name: this.lastName,
                    phone: parseInt(this.phone),
                    email: this.email,
                    road: this.road,
                    zip_code: parseInt(this.zipCode),
                    city: this.city
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
            products: this.itemsInCart,
            order_sum: this.cartSum
            }) 

            console.log("order id: " + order.id)
            this.order=order
            this.pressed=true  
            
            this.productTracking(order)
           
        },

        //Collects information to be able to create instance in product tracking table
        productTracking(order){
            const productsAndAmounts=this.$store.getters.getAddedProductIds 
            productsAndAmounts.forEach(product => {
                this.addProductTrackInstance(product, order)
            });         
        },

        //Creates instance in product tracking table
       async addProductTrackInstance(product, order){
            const instance = await this.$axios.$post(`http://localhost:3000/api/producttracking`,{      
                   product_id: product.id,
                   order_id: order.id,
                   amount: product.amount
               }) 

               console.log("ORDER INSTANCE:" + instance)
            this.stockCorrection()
        },

        //Looks for which products stock correction is to be done at
         stockCorrection(){
            console.log(this.$store.getters.getAddedProductIds)
            const productsAndAmounts=this.$store.getters.getAddedProductIds 
            productsAndAmounts.forEach(product => {
                this.correctStock(product)
            });

        },

        //Carries out the stock correction
        async correctStock(product){
           var updatedAmount= (this.$store.getters.getItemsInCartById(product.id).stock) - product.amount
           console.log("updated amount: " + updatedAmount)
            const updatedProduct = await this.$axios.$put(`http://localhost:3000/api/updateproductstock/${product.id}`,{
              
                   stock: updatedAmount
               }) 
            //Empties the cart
                this.$store.commit('EMPTY_CART')
        }
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
    padding:2em;
}

input{
    width:25em;
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

.linkToTerms{
    margin-left:2.5em;
    margin-top:1em;
    width:8em;
}


.btn-info{
    width:10em;
    position:absolute;
    left:4.5em;
    bottom:0;
}


.orderConfirmation{
    margin-top:12em;
}


</style>