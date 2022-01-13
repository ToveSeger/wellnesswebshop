<template>
    <div class="container">
        <div class="searchBar">
        <input v-model="query" type="text" class="form-control" placeholder="Search product">
        </div>
       <!--  <NuxtLink to="/results" type="button" class="btn btn-light" @click=GetProduct(query)>Search</NuxtLink>       
        <div class="response">{{products}}</div> -->
        <NuxtLink :to="`results/${query}`" >
                    search
                </NuxtLink> 
    </div>
</template>

<script>
import {mapMutations} from "vuex"
    export default {
         ...mapMutations(['GetProduct']),
        data:()=> ({
     /*    products:[], */
        query: null,
       }),  

      /*   computed:{
            products(){
                return this.$store.getters.GetProduct(this.query);
            }
        }, */
/* 
            methods:{
                GetProduct: async function(){
                    this.products = await this.$axios.$get(`http://localhost:3000/api/filterproducts/${this.query}`) 
                }
            }  */

    
    }
</script>

<style scoped>
    .container{
        display:flex;
    }

    .response{
        height:20em;
        width:20em;
        background-color:white;
        border:2em;
    }
  
</style>