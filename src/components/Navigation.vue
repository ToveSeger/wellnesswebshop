<template>
    <div class="nav-bg">
            <div class="flex">
                <NuxtLink to="/"><img class="logo" src="../../src/assets/img/logotype_small.png" alt="wellnesswebshop logo"> </NuxtLink>    
                <div class="links">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
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
    .nav-bg{
        height: 7em;
        width: 100vw;
        background-color: #EAF4F7;
        position:fixed;
        top:0;
        z-index:9999;
    }

    .logo{
        height: 7em;
        margin-left:0.5em;     
    }

    .flex{
        display:flex;
    }

    /*  .cart{
        height:2em;    
    } */

     .bi-cart3{
         width:3em;
         height:3em;
         color:black;
     }

     .bi-cart3:hover{
         color:#177585;
     }

    .links{
        width:90vw;
        display:flex;
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
        color:white;
        font-size: x-large;
    }

  
    

</style>