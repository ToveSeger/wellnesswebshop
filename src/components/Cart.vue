<template>
    <div class="cartContainer">
            <div class="itemContainer">
                <div class="imgContainer">
                    <GetImage :product=item />
                </div>
                    <div class="articleDetails">
                        <p>Article id: {{item.id}}</p>
                        <p>Article name: {{ item.name}}</p>
                        <p>Price: ${{item.price}}</p>
                        <p>Amount: {{this.$store.state.count}}</p>
                    </div>
                <button @click="REMOVE_PRODUCT_FROM_CART(item)" type="button" class="btn btn-danger">Remove item</button>        
            </div>
    </div>
</template>

<script>
import {mapMutations} from "vuex"
import GetImage from "./GetImage.vue";
    export default {
    props: ["item"],

    data:()=> ({
             currentArticles:[]
    }), 

    /* computed:{
        counter(){
            return 0;
        },
    }, */

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
       height:15em;
       width:50em;
       display:flex;
       flex-direction: row;
       gap:2em;
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