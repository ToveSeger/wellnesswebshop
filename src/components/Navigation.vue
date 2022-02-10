 <!--Technical Documentation: 7.7-->
<template>
    <div class="nav-bg">
            <div class="flex">
                <NuxtLink to="/"><img class="logo" src="../../src/assets/img/logotype_small.png" alt="wellnesswebshop logo"> 
                </NuxtLink> 
                    <div class="mobileMenu">  <!--shows if screen size is >1050px -->
                        <button>|||</button>
                        <div class="mobileMenuDropDown">            
                        <MobileNavigation/>
                        </div>
                    </div>
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
                <button v-if="!cartPressed" class="cartButton" @click="()=>{cartPressed=true}">
                <img class="cart" src="../../src/assets/img/cart_rounded.jpg" alt="cart"> 
                </button>
                <button v-else class="closeCart" @click="()=>{cartPressed=false}">
                    <p>Close cart</p>
                </button> 
                <div v-if="cartPressed">     
                    <CartDropDown/>
                </div>
                </div>              
            </div>                        
    </div>
</template>

<script>
import Cart from './Cart.vue'
import Search from './Search.vue'
import MobileNavigation from './MobileNavigation.vue'
import CartDropDown from './CartDropDown.vue'

  export default {     

      data:()=>{
          return{
              cartPressed: false
          }
      }, 
    
  components: { Cart, Search, MobileNavigation, CartDropDown },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
    .nav-bg{
        height: 7em;
        width: 100vw;
        background-color: #EAF4F7;
        position:fixed;
        top:0;
        z-index:9999; 
    }

    img{
        margin-left: 1em;
    }

    .flex{
        display:flex;
        font-size:clamp(0.5rem, 0.5rem + 0.5vw, 1rem);
        margin-right:4em;
    }

     .cart{
         width:4em;
         border-radius: 50%;
     }

     .cartButton{
         position:relative;
         border:none;
         background-color: #EAF4F7;
         height:fit-content;
         width:fit-content;
     }


    .closeCart{
        font-size:clamp(0.5rem, 0.5rem + 0.5vw, 1rem);
        font-family: 'Roboto Condensed', sans-serif;
        font-weight:700;
        background-color: #EAF4F7;
        border:none;
    }

    .links{
        width:90vw;
        display:flex;
        margin-top:2.5em;
        margin-left: 2.5em;
        justify-content: space-evenly;
        font-family: 'Roboto Condensed', sans-serif;
       
    }

    .nav-link{
        color:#177585;      
        font-size:1.3em;
    }

    .divider{
        color:#fff;
        font-size: x-large;
    }

    .mobileMenu{
        width:6em;
        position:fixed;
        right:0;
        display:none;  
    }
    .mobileMenuDropDown{
        position:absolute;
        background-color:#EAF4F7;
        margin-left:2em;
        padding: 0.25rem 0.75rem;
        display:none; 
        z-index: 9999;   
        position:fixed;
        right:1em;     
    }

     @media all and (max-width: 1050px){
    .links{
        display:none;
    }

    .mobileMenu{
        display:flex;
    }
   

  .mobileMenu:focus-within .mobileMenuDropDown, 
  .mobileMenu:focus-within:hover .mobileMenuDropDown{
      display:flex;
      flex-direction: column;
  }

    .mobileMenu button{
        font-size:clamp(1rem, 2rem + 0.8vw, 3rem);
        font-family: 'Source Sans Pro', sans-serif;
        color:#177585;  
        background-color:#EAF4F7;
        border:none;
        transform: rotate(90deg); 
    }

  

} 

  
    

</style>