<template>
    <div class="testing">
{{addedProducts}}
{{inCart}}
<div>
    <button @click="inCartEvaluator(1)"></button>
</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
         data:()=> ({
             addedProducts: [{}],
             inCart: false,
    }), 

    mounted(){
        this.addedProducts = this.$store.getters.getAddedProductIds
        this.inCart = this.$store.getters.getInCart
    },

    methods:{
        inCartEvaluator(productId){
            
            var data = this.addedProducts
            for(var i=0;i<data.length;i++){
                if(data[i].id==productId){
                   this.inCart=true
                }
                else{
                    this.inCart=false
                }
            }
        }
    }
    /* computed:{
        getAddedProducts(){
            return {
               listOfProds: this.$store.getters.getAddedProductIds
            }
        }
    } */
    }
</script>

<style  scoped>
.testing{
    margin-top:12em;
}
</style>