<template>
    <main class="container">
        <h4>My cart</h4>
        <div v-for="item in itemsInCart" :key="item.id">
            <p>Amount: {{getProductById(item.id).amount}}</p>
            <p>Article name: {{ item.name}}</p>
            <p>Price: ${{item.price}}</p>
            <hr class="separator"> 
        </div>   
        <p>Total Cart Sum: {{getCartSum}}</p>
        <NuxtLink to="/cart">
        <img class="cart" src="../../src/assets/img/cart_rounded.jpg" alt="cart">
        </NuxtLink>
    </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

    export default {
        

           computed: {

        ...mapGetters(['getProductById', 'getCartSum']),

        ...mapState(["itemsInCart"]),
        
    },
    }
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
.container{
    font-family: 'Roboto Condensed', sans-serif;
    height:fit-content;
    width:20em;
    background-color: #fff;
    position:relative;
    border-radius:0.5em;
    position:absolute;
    top:7.5em;
    right:1.5em;
    border:solid #177585;
     font-weight: 400;
}

.container h4 {
    margin:auto;
    width:fit-content;
    font-weight: 700;
}

 .cart{
    width:4em;
    border-radius: 50%;
}

.separator{
    	border-top: 1px solid  #177585;
        
        
      
}



</style>