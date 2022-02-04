//Technical Documentation: 7.9.5
<template>
    <div>
        <div class="searchContainer">
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
   

    .searchContainer{
        margin-top:7em;
        height:3.5em;
        width:30vw;
        display:flex;
        gap:1em;
        margin-left:auto;
        margin-right:auto;
        padding:0.5em;
    }
    
    @media all and (max-width: 1050px){
    .searchContainer{
     width:50vw;
  }

}

@media all and (max-width: 750px){
     .searchContainer{
     width:80vw;
  }


}
 

  
</style>