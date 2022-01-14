<template>
    <div class="container">
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching products</p>   
        <div v-else>
         <div>        
            <div v-if="this.product">
            <div class="wrapper">
                <div class="productImg">           
                    <div class="productImg">
                        <GetImage
                        :product="product"
                        />
                    </div>   
                    <h1>{{"$" + product.price}}</h1>   
                    <button class="button"><h4>Buy it now!</h4></button>
                </div>
               <div class="productInformation">
                    <h1>{{product.name}}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi repellendus porro aperiam placeat optio illum explicabo?
                        Assumenda unde voluptatem alias fuga tenetur qui sunt nesciunt enim, 
                        neque, deserunt incidunt reiciendis.</p>
               </div>
            </div>
       </div>
        <div v-else class="container padding">
        <PageNotFound/>
        </div> 
    </div> 
        </div>
    </div>
</template>

<script>
import GetImage from "../../src/components/GetImage.vue"
import ProductCard from "../../src/components/ProductCard.vue"
    export default {

    data:()=> ({
            product:[]
        }), 
        async fetch() {
            this.product = await this.$axios.$get(`http://localhost:3000/api/product/${this.$route.params.details}`)     
        },
    components: { ProductCard, GetImage }
}
</script>

<style  scoped>

.container{
    margin-top:10em;
}
</style>