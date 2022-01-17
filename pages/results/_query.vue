<template>
    <div class="container">
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching products</p>   
        <ul v-else>
        <h1>Results for: "{{this.$route.params.query}}"</h1>
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </ul>
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