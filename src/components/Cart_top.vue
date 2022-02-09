//Technical Documentation: 7.1
<template>
    <div class="top-bg">
    <NuxtLink to="/"><img class="logo" src="../../src/assets/img/logotype_small.png" alt="wellnesswebshop logo"> </NuxtLink>   
     <NuxtLink to="/" class="btn btn-light"><h4>Back to store</h4></NuxtLink>  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

 .top-bg{
        height: 7em;
        width: 100vw;
        background-color: #EAF4F7;
        position:fixed;
        top:0;
        z-index:9999;
        display:flex;
        justify-content: space-between;
        font-family: 'Roboto Condensed', sans-serif;
    }

    .btn{
    font-size:clamp(0.4rem, 0.7rem + 0.2vw, 1.5rem);
    font-weight: bold;
    color:#fff;
    height: 3em;
    margin:2em;
    background-color: #177585;
}   


@media all and (max-width: 400px){
   .btn{
      height:6em;
   }
}

</style>