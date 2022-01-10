<template>
  <div>
    <Navigation/> 
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching products</p>   
    <ul v-else>
       <div v-for="product in allProducts" :key="product.id" class="flex">    
         <GetImage v-bind:image="product.img_id" category="insence"></GetImage>
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
import Navigation from "../src/components/Navigation.vue"
import LoadImages from "../plugins/loadImages/loadImages.vue"
import GetImage from "../src/components/GetImage.vue";
import Footer from "../src/components/Footer.vue";

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
   /*  beforeMount() {
    }, */
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
    components: { LoadImages, GetImage, Footer, Navigation },
    
}     

</script>

<style scoped>

.productCardInCategory{
    width:50vw;
    height:10em;
    margin-left:15em;
}

.flex{
    display:flex;
    margin:4em;
}
</style>