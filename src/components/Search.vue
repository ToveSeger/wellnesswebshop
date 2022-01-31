<template>
    <div class="container">
        <div class="innerContainer">
        <input v-model="query" type="text" class="form-control" placeholder="Search product" @keyup="search">
        <NuxtLink :to="`/results/${query}`" type="button" class="btn btn-info">
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

       methods:{
           search(e){
                if (e.key=== 'Enter' && this.query)
                this.$router.push(`/results/${this.query}`)
                console.log(e)                
           }
       }
    
    }

</script>

<style scoped>
    .container{
        margin-top:7em;
        width:40em;
        height:3.5em;
      /*   position:fixed; */
        /* margin-left:33vw; */
        margin-left:auto;
        margin-right:auto;
        /* top:0em; */
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