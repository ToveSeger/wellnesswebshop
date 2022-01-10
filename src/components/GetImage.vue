<template>
<div class="image">
<img :src="require(`../assets/img/${category}/${prodImg.name || prodImg.alt_text}`)" >
</div>
</template>

<script>
    export default {  
        props:['image', 'category'],     
        data(){
            return{
                prodImg:[],
                categories:[],
            }
        },

        async fetch(){
            this.prodImg = await fetch(`http://localhost:3000/api/image/${this.image}`).then(res => res.json());
           // console.log(this.prodImg.name);
            return this.prodImg.name;
        },

      
        
    
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