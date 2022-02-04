<template>
    <div class="container">
        <div class="innerContainer">
            <h1>My Shopping Cart</h1>
            <div class="topSection">
            </div>
            <div v-if="itemsInCart.length>0" class="cartItemDisplay">
                <Cart
                v-for="item in itemsInCart"
                :key="item.id"
                :item="item"/>
                <button type="button" class="btn btn-dark" @click="EMPTY_CART()">
                    Empty cart
                </button>
                <NuxtLink to="/checkout" type="button" class="btn btn-info">Checkout</NuxtLink>   
                </div>
                <div v-else class="emptyCart">
                    <h3>You have no items in your cart yet</h3>
            </div>
              </div>
                <div v-if="itemsInCart.length>0" class="cartTotal">
                    <h5>{{"Total sum: " + "$"+cartSum}}</h5>
                  </div>
    </div>
</template>

<script>

import { mapState, mapMutations, mapGetters } from 'vuex';

import Cart from '../src/components/Cart.vue';
    export default {    
         layout: "no_navigation",
         
         
    computed: {

        ...mapState(["itemsInCart"]),
        
        ...mapGetters(["getItemsInCart"]),
    },

     data:()=>({
         cartSum: 0,
         cartItems: [{}],
         addedProductIds: [{}]
     }),
 
    mounted(){
       this.cartSum = this.$store.getters.getCartSum
    },
 
     methods:{             
        ...mapMutations(['EMPTY_CART']),  
        },

    components: { Cart }
}
</script>

<style scoped>

.container{
    position:relative;
    height: fit-content;
    border: 0.5em solid #177585;
    height:fit-content;
    width:80vw;
    margin-top:10em;
    margin-bottom:10em;
}
.innerContainer{
    margin-top:1em;
    width:70em;
    margin-bottom:10em;
    width:100%
}

h1{
    font-size:clamp(1.2rem, 1.8rem + 0.4vw, 2.5rem);
    font-family: 'Signika', sans-serif;
    color: #177585;
    text-decoration:underline;
    width:10em;
    margin-left:auto;
    margin-right:auto;
}

.emptyCart{
    font-size:clamp(1rem, 1.4rem + 0.3vw, 2rem);
    font-family: 'Signika', sans-serif;
    color: #177585;
    width:17em;
    margin:auto;
    position: relative;
    top:2em;
    bottom:8em;
    max-width:100%;
}

.cartTotal{
    font-family: 'Signika', sans-serif;
    margin:auto;
    position: relative;
    width:10em;
    bottom:8em;
}
.topSection{
    position:absolute;
    right:0.5em;
    top:0.5em;  
}



.btn-dark{
    position:absolute;
    right:1em;
    bottom:1em;
}
.btn-info{
    height:2.5em;
    width:15em;
    position:absolute;
    right:28em;
    bottom:1em;
}

.nav-link :hover{
   color:#84CBD5; 
}
</style>