<template>
    <div>
         <p v-if="$fetchState.pending">Loading....</p>
         <p v-else-if="$fetchState.error">Error while fetching products</p>   
            <ul v-else>
            <div v-for="product in allProducts" :key="product.id" class="flex"> 
                <GetImage
                :image="product.img_id"
                :pictureFolderName= pictureFolderName
                />                
                <div class="productCardInCategory">           
                    <h4>{{product.name}}</h4>
                    stock: {{product.stock}}             
                </div>    
                <NuxtLink :productId="product.id" :to="`productdetails/${product.id}`" >
                    <li>{{ product.name }}</li>
                </NuxtLink>                 
            </div>
            </ul>
    </div>
</template>

 <script>
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";
import GetImage from './GetImage.vue';
import _details from "../../pages/productdetails/_details.vue";

    export default {
 
        props: ['categoryId', 'pictureFolderName', 'productId'],
  
         data:()=> ({
             allProducts:[]
    }), 

    async fetch() {
        this.allProducts = await this.$axios.$get(`http://localhost:3000/api/productbycategory/${this.categoryId}`)     
    },

    components: { Navigation, Footer, GetImage }
}
</script>  

<style scoped>

.flex{
    display:flex;
    margin-top:10em;
    margin-bottom:10em;
}

</style>