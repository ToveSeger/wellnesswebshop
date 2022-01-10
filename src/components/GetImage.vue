<template>
<div class="image">
<img :src="require(`../assets/img/insence/${prodImg.name || prodImg.alt_text}`)" >
</div>
</template>

<script>
    export default {  
        props:['image'],     
        data(){
            return{
                prodImg:[],
            }
        },

        async fetch(){
            this.prodImg = await fetch(`http://localhost:3000/api/image/${this.image}`).then(res => res.json());
           // console.log(this.prodImg.name);
            return this.prodImg.name;
        }
        
     

    /* methods:{
        GetProdImg: async function () {
           this.prodImg = await fetch(`http://localhost:3000/api/image/${props.id}`).then(res => res.json());
           console.log(this.prodImg.name);
           return this.prodImg.name;
       }
    } */
    }


</script>

<style scoped>
 .image{
    height: 10em;
    width: 25em;
    border: 1em solid black;
}


</style>