<template>
    <div>       
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching products</p>   
          <ul v-else class="flex" >
            <div v-for="product in allProducts" :key="product.id" class="card" >         
                    <ProductCard :product="product"/>              
            </div>
         </ul>
    </div>
</template>

<script>
import ProductCard from "../src/components/ProductCard.vue";
    export default {     

    props:['product'],
         data:()=> ({
             allProducts:[],
             categoryId: 7,
    }), 

    async fetch() {
        try{
            this.allProducts = await this.$axios.$get(`http://localhost:3000/api/productbycategory/${this.categoryId}`)     
            }catch(err){
            console.log(err);
        }
    },


    components: { ProductCard }
}


</script>

<style scoped>
 .flex{
        margin:auto;
        width:70vw;
        margin-bottom:10em;
        margin-top:13em;
    }

    .card{
        height:20em;
        margin:2em;
    }

</style>