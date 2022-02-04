// Technical Documentation: 1.3
<template>
    <div>   
        <Cart_top/>
        <Nuxt/>
        <Footer/>
    </div>
</template>

<script>
import Footer from "../src/components/Footer.vue"
import Cart_top from "../src/components/Cart_top.vue"
    export default {
        
        components:{ Footer, Cart_top }
    }

</script>

<style scoped>

</style>   