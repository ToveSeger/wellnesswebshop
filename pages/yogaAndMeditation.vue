<template>
    <div>       
        <GetProduct
        :product=2
         category="yoga_meditation"
        />
    </div>
</template>

<script>
import GetProduct from "../src/components/GetProduct.vue";
import GetImage from "../src/components/GetImage.vue"
    export default {
    components: { GetProduct, GetImage }
}
</script>

<style scoped>

</style>