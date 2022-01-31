<template>
<div class="image">
 <img :src="imageFromApi.image" alt="">
</div>
</template>

<script>

    export default {  
        props:['product'],
        
           data:()=> ({
             prodImg:{}
        }), 

        computed:{
            imageFromApi(){
                return{
                   image: this.prodImg.name && require((`../assets/img/${this.product.category_id}/${this.prodImg.name || this.prodImg.alt_text}`))
                }
            }
        },

        async fetch() {
            try{
                this.prodImg = await this.$axios.$get(`http://localhost:3000/api/image/${this.product.img_id}`)     
            }catch(err){
                console.log(err)
            }
        },   
    
    }


</script>

<style scoped>
 .image{
    /* max-height: 10em;
    max-width: 15em; */
    max-width: 100%;
    max-height: 100%;
}

img{
    height:12em;
}


</style>