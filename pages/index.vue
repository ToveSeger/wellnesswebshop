<template>
  <div class="index-bg"> 
    <div class="flex">
    <SpecialOffer/>
    <div class="search">
     <Search/>     
    </div>
    </div>
  </div>
</template>

<script>

import SpecialOffer from "../src/components/SpecialOffer.vue"
import Search from "../src/components/Search.vue"


  export default {
    components: { SpecialOffer, Search }
}
</script>

<style scoped>
.index-bg{
  background-image: url("../src/assets/img/buddhaBeige.jpg");
  height: 100vh;
  background-position: center;
  position:fixed;
  top:7;
  left:0;
  right:0;
  background-size: cover;
}

.flex{
  display:flex;
  margin-left:10em;
  margin-top:10em;
}

.search{
  margin-left:10em;
}
</style>