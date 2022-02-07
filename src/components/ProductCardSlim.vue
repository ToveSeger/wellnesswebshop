//Technical Documentation: 7.9.4
<template>
    <div>
        <div class="container">
            <div class="productImg">
                <GetImage
                :product="product"
                />
            </div> 
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
        </div>
    </div>
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
       width:15em;
       margin:auto;
    }

    .productImg{
     margin:1em;
    }


    .productInformation{
        width:15em;
        height:5em;
        padding:1.2em;
    }

    .btn{
        height:2.5em;
        width:12em;
        margin:1em;
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