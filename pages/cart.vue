<template>
    <div class="container">
        <div class="innerContainer">
            <h1>My Shopping Cart</h1>
            <div class="topSection">
            <NuxtLink to="/" class="nav-link"><h4>Back to store</h4></NuxtLink> 
            </div>
        <Cart
        v-for="item in itemsInCart"
        :key="item.id"
        :item="item"/>
        </div>
          <button type="button" class="btn btn-info" @click="EMPTY_CART()">Empty cart</button>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import {mapMutations} from "vuex"
import Cart from '../src/components/Cart.vue';
    export default {
         layout: "no_navigation",
    computed: {
        ...mapState([
            "itemsInCart"
        ])
    },

     methods:{             
        ...mapMutations(['REMOVE_PRODUCT_FROM_CART', 'EMPTY_CART']),   
        },

    components: { Cart }
}
</script>

<style scoped>

.container{
    position:relative;
}
.innerContainer{
    margin-top:10em;
    width:70em;
    margin-bottom:10em;
}

h1{
    font-family: 'Signika', sans-serif;
    color: #177585;
    text-decoration:underline;
    width:10em;
    margin:auto;
}

.topSection{
    display:flex;
}

.nav-link{
    font-family: 'Signika', sans-serif;
    font-weight: bold;
    color:black;
    margin-left:50em;
}

.btn-info{
    position:absolute;
    right:0em;
    bottom:0em;
}
.nav-link :hover{
   color:#84CBD5; 
}
</style>