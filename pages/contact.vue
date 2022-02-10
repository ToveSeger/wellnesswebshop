//Technical Documentation: 3.4
<template>
    <main class="container">
        <h1>Say hello!</h1>
        <article class="innerContainer">
        <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-envelope" viewBox="0 -2 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
            <p> hi@wellnesswebshop.com</p>
        </div>
        <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            <div class="address">
                <p>Wellnesswebshop HQ</p>
                <p>Test avenue 123</p>
                <p>1234 Test Town</p>
            </div>
        </div>
        </article>
    </main>
</template>

</script>

<style  scoped>

.address{
    display:flex;
    flex-direction: column;
}

.flex{
    display:flex;
    gap:0.5em;
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
    font-size:clamp(1.2rem, 2rem + 0.4vw, 2.5rem);
    margin-bottom: 1em;
    text-decoration: underline; 
}

.container p{
     font-size:clamp(0.8rem, 0.8rem + 0.4vw, 1.2rem);
}

</style>