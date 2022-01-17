<template>
    <div>
        <h1>all prods</h1>
        {{"prod" + productId}}
    </div>
</template>

<script>
    export default {
        props:['productId']
        
    }
</script>

<style lang="scss" scoped>

</style>