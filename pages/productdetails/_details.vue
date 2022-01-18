<template>
    <div>
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching products</p>   
        <div v-else>
         <div>        
            <div v-if="this.product" class="flex">
            <div class="card">           
                    <div class="productImg">
                        <GetLargeImage
                        :product="product"
                        />
                    </div>   
               <div class="productInformation">
                    <h1>{{product.name}}</h1>
                    <div v-if="product.on_sale==true" class="sale">
                        <h3>Sale!</h3> 
                        <h3>{{"$" + product.price}}</h3> 
                    </div>
                    <div v-else>
                    <h3>{{"$" + product.price}}</h3>   
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi repellendus porro aperiam placeat optio illum explicabo?
                        Assumenda unde voluptatem alias fuga tenetur qui sunt nesciunt enim, 
                        neque, deserunt incidunt reiciendis.
                    </p> 
                     <div class="stock">{{"Stock:" + " " + product.stock}}</div>          
                    <button class="btn btn-info" @click="()=>{
                        ADD_PRODUCT_TO_CART(product)                                                        
                        }">
                        <h5>Add to cart</h5></button>
                </div>
            </div>
       </div>
        <div v-else>
        <PageNotFound/>
        </div> 
    </div> 
        </div>
    </div>
</template>

<script>
import GetLargeImage from "../../src/components/GetLargeImage.vue"
import ProductCard from "../../src/components/ProductCard.vue"
import {mapMutations} from "vuex"
    export default {    
    data:()=> ({
            product:[]
        }), 
        async fetch() {
            this.product = await this.$axios.$get(`http://localhost:3000/api/product/${this.$route.params.details}`)     
        },


         methods:{             
        ...mapMutations(['ADD_PRODUCT_TO_CART']),   
        },
 
    components: { ProductCard, GetLargeImage },
   
}
</script>

<style  scoped>
    .flex{
        margin:auto;
        width:80vw;
        height:60vh;
        margin-top:13em;
    }

    .card{
        width:80em;
        height:30em;
        margin:2em;
        margin:auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .productImg{
        margin-top:2em;
        margin-left:4em;
    }

    .productInformation{
        padding:5em;
        width:50%;
    }

    .sale{
        color:red;
    }

    .stock{
        margin-bottom:1em;
    }
</style>