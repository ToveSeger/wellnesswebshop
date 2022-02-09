//Technical Documentation: 3.4
<template>
    <main class="container">
        <h1>Say hello!</h1>
        <article class="innerContainer">
        <p> hi@wellnesswebshop.com</p>
        <p class="bold">Address:</p>
        <p>Wellnesswebshop HQ</p>
        <p>Test avenue 123</p>
        <p>1234 Test Town</p>
        </article>
    </main>
</template>

</script>

<style  scoped>

.bold{
    font-weight: bold;
}

.container{
    background-image: url("../src/assets/img/hello.jpg");
    padding:4em;
    background-repeat:no-repeat;
    position:relative;
    border: 0.5em solid #177585;
    background-position: top;
    height:80vh;
    width:80vw;
    margin-top:2em;
    margin-bottom:10em;
    padding:2em;
    font-family: 'Roboto Condensed', sans-serif;
}
.container h1{
    margin-bottom: 1em;
    text-decoration: underline;
  
}

</style>