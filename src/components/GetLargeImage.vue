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
                   image: this.prodImg.name && require((`../assets/img/${this.product.category_id}/${this.prodImg.name_big || this.prodImg.alt_text}`))
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
    height: 22em;
    width:35em;
    display: flex;
    justify-content: center;
}

img{
    border:0.1em solid rgb(233, 231, 231);
    max-width: 100%;
    max-height: 100%;
}


</style>