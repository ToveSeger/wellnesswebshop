<template>
<div class="image">
 <!--    <img  :src="require(`../assets/img/${pictureFolderName}/${prodImg.name || prodImg.alt_text}`)" alt=""> --> 
 <img :src="imageFromApi.image" alt="">
</div>
</template>

<script>

    export default {  
        props:['image', 'pictureFolderName'],     
        
           data:()=> ({
             prodImg:[]
        }), 

        computed:{
            imageFromApi(){
                return{
                   image: this.prodImg.name && require((`../assets/img/${this.pictureFolderName}/${this.prodImg.name || this.prodImg.alt_text}`))
                }
            }
        },

        async fetch() {
            try{
                this.prodImg = await this.$axios.$get(`http://localhost:3000/api/image/${this.image}`)     
            }catch(err){
                console.log(err)
            }
        },   
    
    }


</script>

<style scoped>
 .image{
    height: 10em;
    width: 15em;
}

img{
    height:12em;
}


</style>