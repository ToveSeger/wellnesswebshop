<template>
    <div>       
        <OnSale pictureFolderName="outlet"></OnSale>
    </div>
</template>

<script>

import OnSale from "../src/components/OnSale.vue";
    export default {    
       
    props:[ 'pictureFolderName'],

    components: { OnSale }
}


</script>

<style scoped>

</style>