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
                <NuxtLink :to="`productdetails/${product.id}`" type="button" class="btn btn-info">
                   Read more
                </NuxtLink>                 
            </div>
            </ul>
    </div>
</template>

 <script>

import GetImage from './GetImage.vue';
    export default {
 
        props: ['categoryId', 'pictureFolderName' ],
  
         data:()=> ({
             allProducts:[],
    }), 

    async fetch() {
        try{
            this.allProducts = await this.$axios.$get(`http://localhost:3000/api/productbycategory/${this.categoryId}`)     
            }catch(err){
            console.log(err);
        }
    },

   components: { GetImage } 
}
</script>  

<style scoped>

.flex{
    display:flex;
    justify-content:space-around;
    margin-left:15em;
    margin-top:13em;
    margin-bottom:10em;
    height:10em;
    width:50vw;
}

.btn{
    height:2.5em;
    margin-top:5em;
    text-align:center;
}

</style>