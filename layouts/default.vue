<template>
    <div>   
        <Navigation/>
        <Nuxt/>
        <Footer/>

    </div>
</template>

<script>
import Navigation from "../src/components/Navigation.vue"
import Footer from "../src/components/Footer.vue"
    export default {
        
        components:{Navigation, Footer }
    }

</script>

<style lang="scss" scoped>

</style>   