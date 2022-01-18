export const state=()=>({
     itemsInCart: [{
        

     }],

})

export const mutations={
    ADD_PRODUCT_TO_CART(state, product){
        state.itemsInCart.push(product)
        console.log(product)     
    },

    REMOVE_PRODUCT_FROM_CART(state, product){
        state.itemsInCart.pop(product)
        console.log(product)
    }
}

