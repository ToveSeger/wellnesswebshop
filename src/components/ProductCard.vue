<template>
    <div>
         <div class="productInformation">
                    <h1>{{product.name}}</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Blanditiis assumenda dolorem ullam? Dolore alias cum earum nesciunt. 
                    Perferendis voluptatibus doloribus necessitatibus sed a ut, 
                    facere consectetur ratione, eos unde ex!</p>
                </div>
    </div>
</template>

<script>
    export default {
        props: ['product'],

           data:()=> ({
            product:[]
        }), 
      
    }
</script>

<style lang="scss" scoped>

</style>