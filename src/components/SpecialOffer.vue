<template>
    <div class="card">
        <h2>This weeks special offer</h2>
        <img src="../assets/img/img_movies/secret_400px.jpg" alt="">
        <h3>Only $39.99 </h3>
        <NuxtLink to="/products/55" class="button"><h4>Buy it now!</h4></NuxtLink>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@600&family=Source+Sans+Pro:wght@200;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
.card{
    border: 0.3em solid #84CBD5;
    background-color: rgba(255, 255, 249, 0.7);
    border-radius:5%;
    height:30em;
    width: 25em; 
    margin-top:5em;
    margin-left:10em;
}

h2{
    font-family: 'Signika', sans-serif;
    text-align:center;
    padding:0.5em;
    color: #177585;
    text-decoration:underline;
}

img{
    height:17em;
    width:12em;
    margin-left:auto;
    margin-right: auto;
}

h3{
    color: #177585;
    font-family: 'Signika', sans-serif;
    text-align:center;
    padding:0.5em;
}

.button{
    height:5em;
    width:12em;
    margin-left:auto;
    margin-right: auto;
    margin-bottom:1em;
    border:0.2em solid black;
    border-radius: 5%;
    text-align: center;  
}

h4{
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    color:white;
    background-color:#84CBD5;
    padding:0;
    margin:0;
}


</style>