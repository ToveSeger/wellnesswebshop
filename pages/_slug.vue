<template>
    <div>
        {{this.product}}
    </div>
</template>

<script>
    export default {    
    data() {
        return {
            product: [],         
        };
    },
        async fetch() {
           /*  this.product = await fetch(`http://localhost:3000/api/product/${this.productId}`).then(res => res.json()); */
            this.product = await fetch(`http://localhost:3000/api/product/${params.slug}`).then(res => res.json());
    }
    }
</script>

<style scoped>

</style>