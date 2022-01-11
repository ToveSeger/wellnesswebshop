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
                <div class="cart"><Cart/></div>
                </div>              
            </div>                        
    </div>
</template>

<script>
import Cart from './Cart.vue'

  export default {
  components: { Cart },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
    .nav-bg{
        height: 7em;
        width: 100vw;
        background-color: #EAF4F7;
    }

    .logo{
        height: 6em;
        margin-left:0.5em;     
    }

    .cart{ 
        margin-right:1em;
    }

    .flex{
        display:flex;
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
    }

    .divider{
        color:white;
        font-size: x-large;
    }

  
    

</style>