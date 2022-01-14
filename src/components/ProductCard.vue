<template>
    <div>
        <div class="container">
            <div class="productImg">
                <GetImage
                :product="product"
                />
            </div> 
            <div class="productInformation">
                        <h1>{{product.name}}</h1>
                        <p>{{"Stock:" + " " + product.stock}}</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Blanditiis assumenda dolorem ullam? Dolore alias cum earum nesciunt. 
                        Perferendis voluptatibus doloribus necessitatibus sed a ut, 
                        facere consectetur ratione, eos unde ex!</p>
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

   /*  data: () => ({
        product: []
    }), */
    components: { GetImage }
}
</script>

<style scoped>

    .container{
        display:flex;
        justify-content: space-between;
    }

    .productImg{
     margin-top:4em;
        
    }


    .productInformation{
        width:30em;
        padding:1em;
      
    }

    .btn{
    height:2.5em;
    margin-top:8em;
    text-align:center;
    }



   
</style>