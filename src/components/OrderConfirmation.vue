<template>
    <div>
        <div class="card">
            <h1>Order Confirmation</h1>
            <div class="orderDetails">
            <p>Order no: {{order.id}}</p>
            <p>Customer no: {{customer.id}}</p>
            <h3>Delivery address:</h3>
            <p>{{customer.first_name}} {{customer.last_name}}</p>
            <p>{{customer.road}}</p>
            <p>{{customer.zip_code}}</p>
            <p>{{customer.city}}</p>
            <h3>Notification details:</h3>
            <p>{{customer.email}}</p>
            <p>0{{customer.phone}}</p>
            </div>
            <div class="bottomInfo">
            <p>You'll hear from us when you order is ready to be shipped!</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['customer', 'order']
    }
</script>

<style scoped>

.card{
   height:70vh;
   line-height:0.7em;
   background-image: url("../assets/img/plant_orderConfirmation.jpg");
   background-repeat: no-repeat;  
   background-position: top;
   position:relative;
}

.orderDetails{
    padding:2em;
    font-size:1.5em; 
}


h1{
    padding-top:1em;
    color:#177585;  
    font-family: 'Signika', sans-serif;
    text-decoration: underline;
    text-align: center;
}

h3{
    color:#177585;  
    font-family: 'Signika', sans-serif;
    text-decoration: underline;
}

.bottomInfo{
   position:absolute;
   bottom:3em;
   padding-left:2em;
   font-size:1.2em;
}



</style>