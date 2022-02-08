// Technical Documentation: 2.1
<template>
    <body>
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching products</p>   
        <main v-else>
            <main v-if="this.product" class="flex">
                <article class="card">           
                            <figure v-if="smallScreen" class="productImg">
                                <GetImage
                                :product="product"
                                />
                            </figure>  
                            <figure v-else class="productImg">
                                <GetLargeImage
                                :product="product"
                                />
                            </figure>  
                    <div class="productInformation">
                        <h1>{{product.name}}</h1>
                        <div v-if="product.on_sale==true" class="sale">
                            <h3>Sale!</h3> 
                            <h3>{{"$" + product.price}}</h3> 
                        </div>
                        <div v-else>
                        <h3>{{"$" + product.price}}</h3>   
                        <p>Article id: {{product.id}}</p>  
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Excepturi repellendus porro aperiam placeat optio illum explicabo?
                            Assumenda unde voluptatem alias fuga tenetur qui sunt nesciunt enim, 
                            neque, deserunt incidunt reiciendis.
                        </p> 
                        <div class="stock">{{"Stock:" + " " + product.stock}}</div> 
                        <div v-if="inCart">
                            <button class="amountButton" @click="()=>{
                                if(counter>0)
                                setAmount(counter - 1)
                                counter -= 1
                                }">-</button> 
                            <input type="number" :value="getProductAmountById(product.id)"> 
                            <button class="amountButton" @click="()=>{
                                setAmount(counter + 1)
                                counter += 1 
                                }">+</button>
                        </div>
                        <div v-else-if="product.stock==0">
                            <button class="btn btn-info" id="outOfStock">
                            <h5>Add to cart</h5></button>
                            <p>out of stock</p>
                        </div> 
                        <div v-else> 
                            <button class="btn btn-info" @click="()=>{                       
                                ADD_PRODUCT_TO_CART(product)  
                                inCart=true
                                }">
                            <h5>Add to cart</h5></button>
                        </div>  
                    </div>
                </article>
            </main>
        <div v-else>
        <PageNotFound/>
        </div> 
    </main>  
    </body>
</template>

<script>
import GetLargeImage from "../../src/components/GetLargeImage.vue"
import GetImage from "../../src/components/GetImage.vue"
import ProductCard from "../../src/components/ProductCard.vue"
import {mapMutations, mapActions, mapGetters} from "vuex"
    export default {    
    data:()=> ({
            product:{},    
            counter: 1,
            addedProducts: [],
            inCart: false,
            activeProduct: 0,
            smallScreen: false
        }), 

        async fetch() {
            this.product = await this.$axios.$get(`http://localhost:3000/api/product/${this.$route.params.details}`)     
        },

        computed:{
          
             ...mapGetters(['getProductById','getProductAmountById']),
        },
                                 
    mounted(){
        this.addedProducts = this.$store.getters.getAddedProductIds      
        this.activeProduct =  this.$route.params.details  
        this.setActiveProduct(parseInt(this.activeProduct))
        this.smallScreen = window.innerWidth<766  
        window.onresize = () => {
        this.smallScreen = window.innerWidth <766
        }

         this.inCart= inCartEvaluator(this.$route.params.details, this.addedProducts)
            function inCartEvaluator(productId, data){   
            var found = 0
            if(data.length > 0){
              
                for(var i=0;i<data.length ;i++){ 
                        if(data[i].id==productId){
                         found=1
                        }               
                }
                    if (found>0)return true
                    else return false
            }
        }

    },

    methods:{            

        ...mapMutations(['ADD_PRODUCT_TO_CART']) ,  
        ...mapActions(['setAmount', 'setActiveProduct' ])
    },
 
    components: { ProductCard, GetLargeImage, GetImage }
}
    


</script>

<style  scoped>
    .flex{
        margin:auto;
        width:90vw;
        height:80vh;
        margin-top:2em;
        margin-bottom:10em;
    }

    .card{
        max-width:100%;
        max-height:100%;
        margin:auto;
        display: flex;
        flex-direction: row;
    }


    .productImg{
        max-width:50%;
        margin-top:4em;
        margin-left:2em;
    }

    .productInformation{
        padding:5em;
        width:50%;
    }

    .productInformation p{
        max-width: 100%;
        max-height: 100%;
    }
    .sale{
        color:red;
    }

    .amountButton{
       width:1.5em;
       border-radius:50%;
       border:none;
       background-color: #EAF4F7;
    }

    #outOfStock{
        background-color:grey;
        border:#fff;
        text-decoration: line-through;
    }

   

    .stock{
        margin-bottom:1em;
    }

    @media all and (max-width: 1050px){
        .flex{
            height:110vh;
        }
   .card{
       flex-direction: column;
       gap:0em;
      
   }

   .productInformation{
       width:100%;
       max-height: 100%;
   }

   @media all and (max-width: 450px){
  
    .card{
      max-height:130vh;
      
   }
  }


}

</style>