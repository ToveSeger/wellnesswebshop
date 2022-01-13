<template>
    <div>        
            <div v-if="this.product">
            <div class="wrapper">
                <div class="productImg">           
                    <GetImage
                        :image="product.img_id"
                        :pictureFolderName= GetFolderName()
                    />     

                    <h1>{{"$" + product.price}}</h1>   
                    <button class="button"><h4>Buy it now!</h4></button>
                </div>
               <div class="productInformation">
                    <h1>{{product.name}}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi repellendus porro aperiam placeat optio illum explicabo?
                        Assumenda unde voluptatem alias fuga tenetur qui sunt nesciunt enim, 
                        neque, deserunt incidunt reiciendis.</p>
               </div>
            </div>
       </div>
        <div v-else class="container padding">
        <PageNotFound/>
        </div> 
    </div> 
</template>

<script>
import GetImage from '../../src/components/GetImage.vue'
import PageNotFound from '../../src/components/PageNotFound.vue'
import ProductCard from '../../src/components/ProductCard.vue'
    export default {
     
          data:()=> ({
            product:[]
        }), 

        async fetch() {
            this.product = await this.$axios.$get(`http://localhost:3000/api/product/${this.$route.params.details}`)     
        },

      /*   asyncData ({ params }) {
        return {
            details: params.details
        }
    }, */

     components: { GetImage, ProductCard, PageNotFound },

    methods:{
             GetFolderName: function(){
            if(this.product.category_id==1) return "insence"
            if(this.product.category_id==2) return "yoga_meditation"
            if(this.product.category_id==3) return "books"
            if(this.product.category_id==4) return "CD"
            if(this.product.category_id==5) return "other_category"
            if(this.product.category_id==6) return "aromalamps"
            if(this.product.category_id==7) return "movies_pic"
            else return "folderNotFound"
        },
    },

    
}
</script>

<style scoped>

.productImg{
    width:25em;
    height: 30em;
    border: 0.3em solid #84CBD5;
    border-radius: 5%;
    padding:4em;
    background-color: #FFFFF9;
}

.wrapper{
    display:flex;
    justify-content:space-around;
    width:90vw;
    margin-left:auto;
    margin-right:auto;
    margin:5em;
}

.productInformation{
    width:50em;
    height: 28em;
    border: 0.1em solid #84CBD5;
    border-radius: 5%;
    padding:4em;
}

.button{
    height:3.2em;
    width:13em;
    margin-left:auto;
    margin-right: auto;
    border:none;
    background-color:#84CBD5;
    border-radius: 1em; 
    text-align: center;  
}



</style>
    