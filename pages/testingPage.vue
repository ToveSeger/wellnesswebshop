<template>
    <div class="testing">
{{addedProductIdAndAmount}}
{{"There are " + prodListLength +  "articles in your cart"}}
{{"GET PRODUCT BY ID: " + getProductById(55).amount }}
     <button @click="()=>{
    setAmount(value)
    }">Increase amount</button>
   <button @click="
    setTest(testParameter)
    ">Change test</button> 
    {{getTest}}

       <button @click="
    setActiveProduct(testId)
    ">Change active product</button> 
    {{"ID OF ACTIVE PRODUCT: " + getActiveProductId}}

 

</div>
</template>
<script>
import {mapGetters, mapMutations, mapActions } from 'vuex';
    export default {
         data:()=> ({
             addedProductIdAndAmount: [{}],
             inCart: false,
             testParameter: "hola",
             testId:3,
             value: 55000
        }), 

    mounted(){
        this.addedProductIdAndAmount = this.$store.getters.getAddedProductIds
        this.inCart = this.$store.getters.getInCart
    },

    methods:{
      


        ...mapMutations(['SET_AMOUNT', 'TEST', 'SET_ACTIVE_PRODUCT']),
        ...mapActions(['setAmount', 'setTest', 'setActiveProduct' ])
    },
    computed:{
        prodListLength(){
            return this.$store.getters.getLengthOfAddedProductIds
        },


        amount:{
            get(id){
                return this.$store.getters.getProductById(id)
            },
            
            set(newValue){
                return this.$store.dispatch(getProductById.amount, newValue)
            },
           
        },

        ...mapGetters(['getProductById', 'getTest', 'getActiveProductId']),
    },

   
}   
</script>

<style  scoped>
.testing{
    margin-top:12em;
}
</style>