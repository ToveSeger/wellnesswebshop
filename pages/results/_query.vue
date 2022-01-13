<template>
    <div class="container">
      <h1>Results for: "{{this.$route.params.query}}"</h1>
        <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
    </div>
</template>

<script>
import ProductCard from "../../src/components/ProductCard.vue"
    export default {

    data: () => ({
        products: []
    }),
    async fetch() {
        this.products = await this.$axios.$get(`http://localhost:3000/api/filterproducts/${this.$route.params.query}`);
    },
    components: { ProductCard }
}
</script>

<style  scoped>

.container{
    margin-top:10em;
}
</style>