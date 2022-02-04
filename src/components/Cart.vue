//Technical Documentation: 7.2
<template>
    <div class="cartContainer">
            <div class="itemContainer">
                <div v-if="!smallScreen" class="imgContainer">
                    <GetImage :product=item />
                </div>
                    <div class="articleDetails">
                        <p>Article id: {{item.id}}</p>
                        <p>Article name: {{ item.name}}</p>
                        <p>Price: ${{item.price}}</p>
                        <p>Amount: {{getProductById(item.id).amount}}</p>
                    </div>
                <button @click="REMOVE_PRODUCT_FROM_CART(item)" type="button" class="btn btn-danger">Remove item</button>        
            </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex"
import GetImage from "./GetImage.vue";

    export default {
    props: ["item"],

      data:()=> ({
             smallScreen: 0 
    }), 

    mounted() {  
        this.smallScreen = window.innerWidth<766  
        window.onresize = () => {
        this.smallScreen = window.innerWidth <766
        }
    },

     computed:{
        ...mapGetters(['getProductById']),
    }, 

      methods:{             
        ...mapMutations(['REMOVE_PRODUCT_FROM_CART']),   
        },

    components: { GetImage }
}

</script>

<style scoped>
    .cartContainer{
        margin-top:2em; 
    }
   .itemContainer{
       position:relative;
       margin:auto;
       padding:2em;
       border: 0.1em solid #84CBD5;
       height:16em;
       width:50em;
       display:flex;
       flex-direction: row;
       gap:6.5em;
       width:100%;
   }

   .btn-danger{
       position: absolute;
       bottom: 1em;
       right: 1em;
       height:2.3em;
       border-radius:5%;
       margin-top:10em;
       margin-left:5em;
       text-align:center;
   }



</style>