<template>
    <div>
        <Navigation/>
        productpage
        <!-- {{productId}} -->
        {{"params" + this.$route.params.productId}}
      <!--   {{product}} -->
         <!-- <p v-if="$fetchState.pending">Loading....</p>
         <p v-else-if="$fetchState.error">Error while fetching products</p>   
            <ul v-else>
            <div class="flex"> 
                <GetImage
                :image="product.img_id"
                :pictureFolderName= pictureFolderName
                />                
                <div class="productCardInCategory">           
                    <h4>{{product.name}}</h4>
                    stock: {{product.stock}}             
                </div>    
                </div>
            </ul> -->
        <Footer/>
    </div>
</template>

 <script>
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";
import GetImage from './GetImage.vue';
import ProductButton from "./ProductButton.vue";

    export default {
 
        props: ['productId'],
  
    data() {
        return {
            product: []        
        };
    },
    async fetch() {
        this.product = await fetch(`http://localhost:3000/api/product/${this.productId}`).then(res => res.json());
    },
    components: { Navigation, Footer, GetImage, ProductButton }
}
</script>  

<style scoped>

</style>