<template>
    <div class="cartContainer">
       <h1>CART</h1>
       {{item.id}}
       {{item.name}}
       {{item.price}}
       {{"from cookies:" + this.$cookies.get("cartItem")}}
       {{"from computed:" + getCookies.nameOfProduct}}
         <button @click="saveCart">save cart</button> 
    </div>
</template>

<script>
    export default {
        props:['item'],

       /*  data:()=> ({
             cart:[]
        }),  */

        computed:{
            getCookies(){
                const cartCookies= this.$cookies.get("cartItem")
                const nameOfProduct= cartCookies.name
                return {nameOfProduct}
            }

           

        },

        methods:{
            saveCart(){
            const data={
            cartItem:item
            }
            this.$cookies.set("cartItem", data, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7   
            })
            console.log("logging cookie:" + this.$cookies.get("cartItem"))
         } 
        }
}

</script>

<style scoped>
   

</style>