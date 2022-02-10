//Technical Documentation: 7.9.4
<template>
        <main class="container">
            <figure class="productImg">
                <GetImage
                :product="product"
                />
            </figure> 
            <div class="productInformation">
                        {{product.name}}
                        <div v-if="product.on_sale==true" class="sale">
                        <h4>{{"$" + product.price}}</h4> 
                        </div>
                        <div v-else>
                        <h3>{{"$" + product.price}}</h3>   
                        </div>
            </div>
             <NuxtLink :to="`/productdetails/${product.id}`" type="button" class="btn btn-info">
                   Read more
             </NuxtLink>  
        </main>
</template>

<script>
import GetImage from "./GetImage.vue";

    export default {
    props: ["product"],

    components: { GetImage }
}
</script>

<style scoped>

    .container{
       font-family: 'Roboto Condensed', sans-serif;
       width:15em;
       margin:auto;
    }

    .productImg{
     margin:0.5em;
    }


    .productInformation{
        width:12em;
        height:5em;
        padding:0.5em;
    }

    .btn{
        height:2.5em;
        width:12em;
        margin:0.5em;
        text-align:center;
    }

    .sale{
        color:red;
    }

@media all and (max-width: 390px){
    .btn{
        width:8em;
    }
}

   
</style>