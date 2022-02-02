<template>
    <div>   
        <Navigation/>
        <Search/>
        <Nuxt/>
        <Footer/>

    </div>
</template>

<script>
import Navigation from "../src/components/Navigation.vue"
import Footer from "../src/components/Footer.vue"
import Search from "../src/components/Search.vue"
    export default {
        
        components:{Navigation, Footer, Search  }
    }

</script>

<style scoped>

</style>   