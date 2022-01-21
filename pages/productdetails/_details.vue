<template>
    <div>
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching products</p>   
        <div v-else>
         <div>        
            <div v-if="this.product" class="flex">
            <div class="card">           
                    <div class="productImg">
                        <GetLargeImage
                        :product="product"
                        />
                    </div>   
               <div class="productInformation">
                    <h1>{{product.name}}</h1>
                    <div v-if="product.on_sale==true" class="sale">
                        <h3>Sale!</h3> 
                        <h3>{{"$" + product.price}}</h3> 
                    </div>
                    <div v-else>
                    <h3>{{"$" + product.price}}</h3>   
                    <p>Article id: {{activeProduct}}</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi repellendus porro aperiam placeat optio illum explicabo?
                        Assumenda unde voluptatem alias fuga tenetur qui sunt nesciunt enim, 
                        neque, deserunt incidunt reiciendis.
                    </p> 
                     <div class="stock">{{"Stock:" + " " + product.stock}}</div> 
                     <div v-if="inCart">
                         <button @click="()=>{
                             if(counter>0)
                               setAmount(counter - 1)
                               counter -= 1
                             }">-</button> 
                         <input type="number" v-model="counter"> 
                         <button  @click="()=>{
                              setAmount(counter + 1)
                              counter += 1 
                             }">+</button>
                    </div> 
                    <div v-else> 
                        <button class="btn btn-info" @click="()=>{                       
                            ADD_PRODUCT_TO_CART(product)  
                            inCart=true
                            }">
                        <h5>Add to cart</h5></button>
                  </div>  
                </div>
            </div>
       </div>
        <div v-else>
        <PageNotFound/>
        </div> 
    </div> 
        </div>
    </div>
</template>

<script>
import GetLargeImage from "../../src/components/GetLargeImage.vue"
import ProductCard from "../../src/components/ProductCard.vue"
import {mapMutations, mapActions, mapGetters} from "vuex"
    export default {    
    data:()=> ({
            product:[],    
            counter: 1, 
            addedProducts: [],
            inCart: false,
            activeProduct: 0
        }), 
        async fetch() {
            this.product = await this.$axios.$get(`http://localhost:3000/api/product/${this.$route.params.details}`)     
        },

    computed:{
        
        ...mapGetters(['getProductById']),

    },
                                 
    mounted(){
        this.addedProducts = this.$store.getters.getAddedProductIds      
        this.activeProduct =  this.$route.params.details  
        this.setActiveProduct(parseInt(this.activeProduct))

         this.inCart= inCartEvaluator(this.$route.params.details, this.addedProducts)

            function inCartEvaluator(productId, data){   
            var found = 0
            if(data.length > 0){
              
                for(var i=0;i<data.length ;i++){ 
                        if(data[i].id==productId){
                         console.log("I WAS FOUND ")
                         found=1
                        }
                        else {
                            console.log("I WAS NOT FOUND")    
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
 
    components: { ProductCard, GetLargeImage }
}
    


</script>

<style  scoped>
    .flex{
        margin:auto;
        width:80vw;
        height:60vh;
        margin-top:13em;
    }

    .card{
        width:80em;
        height:30em;
        margin:2em;
        margin:auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .productImg{
        margin-top:2em;
        margin-left:4em;
    }

    .productInformation{
        padding:5em;
        width:50%;
    }

    .sale{
        color:red;
    }

    .stock{
        margin-bottom:1em;
    }
</style>