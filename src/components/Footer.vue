<template>
    <div class="footer-bg">
        <div class="flex">
            <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
            <NuxtLink to="/" class="nav-link">Wellnesswebshop &copy;</NuxtLink>
            <NuxtLink to="/termsandconditions" class="nav-link">Terms & Conditions</NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400&display=swap');

 .footer-bg{
        height: 7em;
        width: 100vw;
        background-color: #EAF4F7;
        position:fixed;
        bottom:0;
        padding:2em;
    }

.flex{
    width:40em;
    display: flex;
    font-weight: 900;
    font-family: 'Source Sans Pro', sans-serif;
    margin-left: auto;
    margin-right: auto;
    }

    .nav-link{
        color:#177585;      
    }

    @media all and (max-width: 750px){

         .footer-bg{
             height: 8em;   
             padding:1em;
        }
     .flex{
         flex-direction: column;
         margin-left: auto;
         margin-right:auto;
         width:15em;
     }


}

</style>