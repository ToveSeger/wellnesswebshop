<template>
<div class="image">
    <img  :src="require(`../assets/img/${pictureFolderName}/${prodImg.name || prodImg.alt_text}`)" alt=""> 
</div>
</template>

<script>
import GetProduct from "./GetProduct.vue";
import books from "../../pages/books.vue";

    export default {  
        props:['image', 'pictureFolderName'],     
        
        data(){
            return{
                prodImg:[],
            }
        },

        async fetch(){
            this.prodImg = await fetch(`http://localhost:3000/api/image/${this.image}`).then(res => res.json());
           // console.log(this.prodImg.name);
            return this.prodImg.name;
        },

      components:{GetProduct, books}
        
    
    }


</script>

<style scoped>
 .image{
    height: 10em;
    width: 15em;
}

img{
    height:8em;
}


</style>