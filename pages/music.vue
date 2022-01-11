<template>
    <div>       
        <GetProduct categoryId="4" pictureFolderName="CD"></GetProduct>
    </div>
</template>

<script>
import GetProduct from "../src/components/GetProduct.vue";
import GetImage from "../src/components/GetImage.vue"
    export default {     
    props:['categoryId', 'pictureFolderName'],

    components: { GetProduct, GetImage }
}


</script>

<style scoped>

</style>