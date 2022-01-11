<template>
    <div>
        <Navigation/>
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
                </div>
            </ul>
        <Footer/>
    </div>
</template>

 <script>
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";
import GetImage from './GetImage.vue';

    export default {
 
        props: ['categoryId', 'pictureFolderName'],
  
    data() {
        return {
            allProducts: [],         
        };
    },
    async fetch() {
        this.allProducts = await fetch(`http://localhost:3000/api/productbycategory/${this.categoryId}`).then(res => res.json());
    },
    components: { Navigation, Footer, GetImage }
}
</script>  

<style scoped>

</style>