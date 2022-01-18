<template>
    <div class="container">
        <div class="innerContainer">
                <div>
                    Your products:
                     <Cart
                    v-for="item in itemsInCart"
                    :key="item.id"
                    :item="item"/>              
                </div>
        </div>
        <form action="post">
            <label>First name: </label>
            <input type="text" required>
            <label>First name: </label>
            <input type="text" required>
             <label>Email: </label>
            <input type="email" required>
        </form>
    </div>
</template>

<script>
import Cart from "../src/components/Cart.vue";
import { mapState } from 'vuex';
    export default {
    components: { Cart },

     computed: {
        ...mapState([
            "itemsInCart"
        ])
    },
}
</script>

<style  scoped>
.innerContainer{
    margin-top:12em;
}

form{
    display:flex;
    flex-direction: column;
}

input{
    width:15em;
}
</style>