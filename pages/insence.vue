<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching products</p>   
    <ul v-else>
        <h1>Product</h1>
       <li v-for="product in allProducts" :key="product.id">    
           <div class="productCardInCategory">           
             name: {{product.name}}   
             stock: {{product.stock}}  
             {{GetProdImg(product.id)}}
           <div v-for="img in prodImg" :key="img.id"> 
                {{prodImg.name}}
            </div>                 
           </div>    
      </li>      
    </ul>
  </div>
  
<!-- <div> 

  <h1>All products</h1>
  {{allProducts}}
  </div>
   -->
</template>
<script>
 export default {
    data() {
      return {
        products: [],
        allProducts: [],
        prodImg: [{
            id:9999,
            name: "dummy", 
            category_id: 0,
            stock: 1000,
            on_sale: true,
            img_id: 1,
            price:2.2

        }

        ],
      }

    },
    async fetch () {       
      this.allProducts = await fetch(
        'http://localhost:3000/api/productbycategory/1'
      ).then(res=>res.json())
      },   

      methods:{
          GetProdImg: async function(img){
               this.prodImg= await fetch(`http://localhost:3000/api/image/${img}`
              ).then(res=>res.json())
              console.log(this.prodImg.name)   
              return this.prodImg.name
          },          
      }
 }     
</script>

<style scoped>

.productCardInCategory{
    width:50vw;
   height:10em;
}
</style>