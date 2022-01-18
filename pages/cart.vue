<template>
    <div>
        <div class="container">
            <h1>My Shopping Cart</h1>
            <div class="topSection">
            <NuxtLink to="/" class="nav-link"><h4>Back to store</h4></NuxtLink> 
            </div>
        <Cart
        v-for="item in itemsInCart"
        :key="item.id"
        :item="item"/>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import Cart from '../src/components/Cart.vue';
    export default {
         layout: "no_navigation",
    computed: {
        ...mapState([
            "itemsInCart"
        ])
    },
    components: { Cart }
}
</script>

<style scoped>

.container{
    margin-top:10em;
    width:80em;
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

.nav-link :hover{
   color:#84CBD5; 
}
</style>