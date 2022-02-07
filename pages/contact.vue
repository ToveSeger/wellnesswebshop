//Technical Documentation: 3.4
<template>
    <div class="container">
        <h1>Say hello!</h1>
        <div class="innerContainer">
        <p> hi@wellnesswebshop.com</p>
        <p class="bold">Address:</p>
        <p>Wellnesswebshop HQ</p>
        <p>Test avenue 123</p>
        <p>1234 Test Town</p>
        </div>
    </div>
</template>

</script>

<style  scoped>

.bold{
    font-weight: bold;
}
.container{
    width:80em;
    height:50em;
    margin-top:2em;
    margin-bottom:10em;
    background-image: url("../src/assets/img/hello.jpg");
    background-repeat:no-repeat;
    padding:4em;
    border: 1em solid #177585;
    font-family: 'Signika', sans-serif;
     
}
.container h1{
    margin-bottom: 1em;
    text-decoration: underline;
  
}

</style>