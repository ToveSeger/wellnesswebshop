<template>
    <div class="container">
        <div class="innerContainer">
        <input v-model="query" type="text" class="form-control" placeholder="Search product">
        <NuxtLink :to="`/results/${query}`" type="button" class="btn btn-info" >
            Search
        </NuxtLink> 
        </div>
    </div>
</template>

<script>

    export default {

        data:()=> ({

        query: null,
       }),  
    
    }
</script>

<style scoped>
    .container{
        margin-top:7em;
        background-color: #EAF4F7; 
        width:40em;
        height:3.5em;
        position:fixed;
        margin-left:33vw;
        top:0em;
        z-index:9999;
    }

    .innerContainer{
        width:25em;
        display:flex;
        gap:1em;
        margin-left:auto;
        margin-right:auto;
        padding:0.5em;
    }
    


  
</style>