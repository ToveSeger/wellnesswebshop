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
        <h1>Shipping information</h1>
        <form @submit.prevent="submitForm">
            <label>First name: </label>
            <input type="text" v-model="firstName" required>
            <label>Last name: </label>
            <input type="text" v-model="lastName" required>
            <label>Street & house number: </label>
            <input type="text" v-model="streetAndHouseNumber" required>
            <label>Zip code: </label>
            <input type="text" pattern="[0-9]*" v-model="zipCode" required>
            <label>Email: </label>
            <input type="email" v-model="email" required>
            <label>Phone: </label>
            <input type="tel" v-model="phone" required>
            <label>I accept the terms</label>
            <input type="checkbox" required>
            <button type="submit">Confirm order</button>
        </form>
    </div>
</template>

<script>
import Cart from "../src/components/Cart.vue";
import { mapState } from 'vuex';
    export default {

        data:()=>{
            return{
                firstName: " ",
                lastName: " ",
                email: " ",
                phone: " ",
                streetAndHouseNumber: " ",
                zipCode: " ",
                orderUser: {}
            }

        },
        
        computed: {
            ...mapState([
                "itemsInCart"
        ])
    },

    methods:{
         submitForm(){
             this.orderUser={
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone,
                streetAndHouseNumber: this.streetAndHouseNumber,
                zipCode: this.zipCode
             }

            console.log(this.orderUser)
            
           this.$router.push('orderconfirmation') 
        }
    },
            components: { Cart }
}
</script>

<style  scoped>

.container{
    margin-bottom:10em;
}
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