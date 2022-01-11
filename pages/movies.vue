<template>
    <div>       
        <GetProduct categoryId="7" pictureFolderName="movies_pic"></GetProduct>
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