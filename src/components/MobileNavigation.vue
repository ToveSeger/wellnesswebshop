//Technical Documentation: 7.6
<template>
    <div>
            <div class="flex">
                <div class="flexLinks">
                <NuxtLink to="/outlet" class="nav-link">Outlet</NuxtLink> 
                <div class="divider"> | </div>
                <NuxtLink to="/insence" class="nav-link">Insence</NuxtLink> 
                <div class="divider"> | </div>
                <NuxtLink to="/books" class="nav-link">Books</NuxtLink>
                <div class="divider"> | </div> 
                 <NuxtLink to="/movies" class="nav-link">Movies</NuxtLink> 
                <div class="divider"> | </div> 
                <NuxtLink to="/yogaAndMeditation" class="nav-link">Yoga & Meditation</NuxtLink> 
                <div class="divider"> | </div>
                <NuxtLink to="/music" class="nav-link">Music</NuxtLink> 
                <div class="divider"> | </div>
                <NuxtLink to="/aromalamps" class="nav-link">Aroma Lamps</NuxtLink>                  
                 <div class="divider"> | </div>
                <NuxtLink to="/cart"> <img class="cart"/>
                <img class="cart" src="../../src/assets/img/cart_rounded.jpg" alt="cart"> 
                </NuxtLink>
                </div>              
            </div>                        
    </div>
</template>

<script>
import Cart from './Cart.vue'
import Search from './Search.vue'

  export default {     
    
    
  components: { Cart, Search },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
  
  .flex{
      width:15em;
      z-index:9999;
  }
     .bi-cart3{
         margin-right:4em;
         width:3em;
         height:3em;
         color:black;
     }

     .bi-cart3:hover{
         color:#177585;
     }

    .flexLinks{
        width:90vw;
        display:flex;
        flex-direction: column;
        margin-top:2.5em;
        margin-left: 2.5em;
        justify-content: space-evenly;
        font-family: 'Source Sans Pro', sans-serif;
    }

    .nav-link{
        color:#177585;      
        font-size:1.3em;
    }

    .divider{
        color:#fff;
        font-size: x-large;
        transform: rotate(90deg); 
    }

     .cart{
         width:4em;
         border-radius: 50%;
     }
    
</style>