<template>
  <div id="app">
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching products</p>   
    <ul v-else>
        <h1>Product</h1>
       <div v-for="product in allProducts" :key="product.id" class="flex">    
           <div class="productCardInCategory">           
             name: {{product.name}}   
             stock: {{product.stock}}    
             img_id: {{product.img_id}}            
           </div>    
         <GetImage v-bind:image="product.img_id"></GetImage>
        </div>
    </ul>
  </div>
</template>
<script>
import LoadImages from "../plugins/loadImages/loadImages.vue"
import GetImage from "../src/components/GetImage.vue";

 export default {
    data() {
        return {
            allProducts: [],
            counter: 0,
            prodImg: [{
                    id: 9999,
                    name: "dummy",
                    category_id: 0,
                    stock: 1000,
                    on_sale: true,
                    img_id: 1,
                    price: 2.2
                }
            ],
        };
    },
    async fetch() {
        this.allProducts = await fetch("http://localhost:3000/api/productbycategory/1").then(res => res.json());
    },
    beforeMount() {
    },
    methods: {
        GetProdImg: async function (img) {
            this.prodImg = await fetch(`http://localhost:3000/api/image/${img}`).then(res => res.json());
            console.log(this.prodImg.name);
            return this.prodImg.name;
        },

         LoadImages:function (productImgId){
            this.$LoadImages.show({
                prodImgId: productImgId,
                closeWait: 3000,
            })
        }
    },
    components: { LoadImages, GetImage },
    
}     

</script>

<style scoped>

.productCardInCategory{
    width:50vw;
   height:10em;
}

.flex{
    display:flex;
}
</style>