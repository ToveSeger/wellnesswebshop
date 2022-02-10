//Technical Documentation: 7.9.3
<template>
        <main class="container">
            <div class="productImg">
                <GetImage
                :product="product"
                />
            </div> 
            <article class="productInformation">
                        <h1>{{product.name}}</h1>
                        <p>{{"Stock:" + " " + product.stock}}</p>
                         <div v-if="product.on_sale==true" class="sale">
                        <h3>Sale!</h3> 
                        <h3>{{"$" + product.price}}</h3> 
                        </div>
                        <div v-else>
                        <h3>{{"$" + product.price}}</h3>   
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Blanditiis assumenda dolorem ullam? Dolore alias cum earum nesciunt. 
                        Perferendis voluptatibus doloribus necessitatibus sed a ut, 
                        facere consectetur ratione, eos unde ex!</p>
            </article>
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
        display:flex;
        justify-content: space-between;
        max-height:100%;
    }

    .productImg{
     margin-top:4em;
    }


    .productInformation{
        width:30em;
        padding:1.2em;
        max-height: 100%;
    }

    .btn{
        height:2.5em;
        margin-top:8em;
        text-align:center;
    }

    .sale{
        color:red;
    }


   
</style>