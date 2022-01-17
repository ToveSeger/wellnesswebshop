export const state=()=>({
     itemsInCart: [{
   

     }],

})



export const mutations={
     ADD_PRODUCT_TO_CART(state, product){
        state.itemsInCart.push(product)
        console.log(product)
    }
}