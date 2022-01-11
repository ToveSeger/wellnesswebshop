<template>
    <div>
      <!-- <div @click="$router.push(`{name:'product', params:{productId: ${productId}}}`)">Read more</div> -->
      <NuxtLink :to="product">read more</NuxtLink>
    </div>
</template>

<script>
import ChosenProduct from "./ChosenProduct.vue";
    export default {
    props: ['productId'],
    components: { ChosenProduct }
}
</script>

<style scoped>

</style>