<template>
    <div>
        <div class="card">
            <div class="innerContainer">
            <h1>{{product.name}}</h1>
            <div class="productImg">
                <GetImage
                :product="product"
                />
            </div> 
            <div class="flex">
            <div class="productInformation">
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
            </div>
             <NuxtLink :to="`/productdetails/${product.id}`" type="button" class="btn btn-info">
                   Read more
             </NuxtLink>  
            </div>

            </div>
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

    .card{
        display:flex;
        
        max-height:50em;
    }

    .innerContainer{
        padding:1em;
        margin-left:auto;
        margin-right:auto;
        max-width:100%;
    }
    
    .productImg{
    margin:1em;
    }

    .productInformation{
        width:30em;
        padding:1.2em;
        max-width:100%;
    }

      .productInformation p{
       max-width:100%;
  
    }

    .btn{
        height:2.5em;
        width:15em;
        margin-top:0.5em;
        text-align:center;
    }

    .sale{
        color:red;
    }

.flex{
    display:flex;
    flex-direction: column;
}

   
</style>