<template>
    <div>
        <div class="container">
        <Cart
        v-for="item in itemsInCart"
        :key="item.id"
        :item="item"/>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import Cart from '../src/components/Cart.vue';
    export default {
    
    computed: {
        ...mapState([
            "itemsInCart"
        ])
    },
    components: { Cart }
}
</script>

<style scoped>

.container{
    margin-top:10em;
}

</style>