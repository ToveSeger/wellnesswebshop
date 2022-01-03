<template>
 <div>
   <b-container >
   <b-row>
    <b-col>
        <h1>product</h1>
        <button @click="getProductById()"></button>
     <div v-for="product in product" :key="product.id">
      <div >
        <n-link :to="`/product/${product.id}`"><h1>{{product.name}}</h1></n-link>
      </div>
     </div>
    </b-col>
   </b-row>
  </b-container>
 </div>
</template>
<script>
   const ProductSetter= {
       data(){
return {
    product:null
}
       }
   }
 
export default {
    methods:{
        async getProductById() {
           const product = await prisma.product.findUnique({
             include: {
               name: true,
             },
           });
           return { product };
         },
    }
}
</script>