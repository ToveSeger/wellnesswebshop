<template>
    <div class="card">
        <h2>This weeks special offer</h2>
        <div class="cardContent">
                    <div class="productImg">
                        <GetLargeImage
                        :product="product"
                        />
                    </div>   
                <div class="price">
                    <h3 class="sale">Now: {{GetDiscount(product.price, 20)}}</h3>
                    <h3 class="ordPrice">Ord: {{(product.price)}}</h3>
                </div>
                <NuxtLink :to="`/productdetails/${product.id}`" class="button"><h4>Buy it now!</h4></NuxtLink>
        </div>
    </div>
</template>

<script>
import GetLargeImage from "./GetLargeImage.vue";
    export default {
    props: ["product"],
   
    methods:{
        GetDiscount: function (ordinaryPrice, discountInPercentage){
            let percentage = (100 - discountInPercentage)/100 
            let price=ordinaryPrice*percentage
            return price.toFixed(2)
        }
    },

    components: { GetLargeImage }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@600&family=Source+Sans+Pro:wght@200;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
.card{   
    border: 0.3em solid #84CBD5;
    background-color: rgba(255, 255, 249, 0.7);
    border-radius:5%;
    height:30em;
    width: 50em; 
}

.cardContent{
    display:flex;
}


h2{
    font-family: 'Signika', sans-serif;
    text-align:center;
    padding:0.3em;
    color: #177585;
    text-decoration:underline;
}

.productImg{
    width:18em;
    height:20em;
}

h3{
    font-family: 'Signika', sans-serif;
    text-align:center;
    padding:0.5em;
}

.price{
    margin:auto;
}
.sale{
    color:red;
}

.ordPrice{
     color: #177585;
     text-decoration: line-through;
}
.button{
    height:3.2em;
    width:13em;
    margin-top:21em;
    border:0.15em solid black;
    background-color:#84CBD5;
    border-radius: 1em; 
    text-align: center;  
}

h4{
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    text-align:center;
    color:white;
    padding:0.3em;
    margin:0;
    border-radius: 1em;
}


</style>