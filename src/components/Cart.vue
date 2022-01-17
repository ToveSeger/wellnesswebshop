<template>
    <div class="cartContainer">
       <h1>CART</h1>
       {{item.id}}
       {{item.name}}
       {{item.price}}
    </div>
</template>

<script>
    export default {
        props:['item'],

        data:()=> ({
             cart:[]
        }), 
}

</script>

<style scoped>
   

</style>