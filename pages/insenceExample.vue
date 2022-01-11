<template>
    <div>
    <Navigation/>    
    <div class="flex">
        <div class="productCard">
            <div class="productCardText">
            <img src="../src/assets/img/insence/insenceBox_400px.jpg" alt="">
            <h3> $39.99 </h3>
            <a to="" class="button">Add to cart</a> 
            </div>
        </div>
        <div class="productInfoCard">
            <h4>Product title</h4>
            <p>
            Creamy cauliflower alfredo smoky maple tempeh glaze cherry bomb 
            pepper red grapes black beans ultimate apricot lychee chilies red pepper
            chocolate peanut butter dip cool off Mexican fiesta tahini drizzle cauliflower
            summer eating together picnic salad ghost pepper coconut homemade balsamic. 
            Crispy orange figs almond milk chai latte spiced pumpkin chili fruit smash udon 
            noodles summertime Bolivian rainbow pepper vine tomatoes roasted butternut squash tabasco pepper
            </p>
        </div>
     </div>
    <Footer/>
    </div>
</template>

<script>
import Navigation from "../src/components/Navigation.vue"
import Cart from "../src/components/Cart.vue"
import Footer from "../src/components/Footer.vue"
    export default {
        components: { Navigation, Cart, Footer }
    }
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
.productCard{
    border: 0.3em solid #84CBD5;
    background-color: rgba(255, 255, 249, 0.7);
    border-radius:5%;
    height:30em;
    width: 30em; 
    margin-top:5em;
    margin-left:10em;

}

.productCardText{
    text-align: center;
}

img{
    margin:2em;
}
.productInfoCard{
    border: 0.1em solid #84CBD5;
    background-color: rgba(255, 255, 249, 0.7);
    border-radius:5%;
    height:25em;
    width: 35em; 
    margin-top:5em;
    margin-left:10em;
    padding: 2em;
}

.flex{
    display:flex;
}

.button{
    height:5em;
    width:15em;
    margin-left:auto;
    margin-right: auto;
    margin-top:3em;
    border-radius:0.15em;
    background-color:#84CBD5;
    border-radius: 1em; 
    text-align: center; 
    font-family: 'Source Sans Pro', sans-serif; 
    font-weight: 900;
    color:white;
    padding:0.3em;
}



</style>