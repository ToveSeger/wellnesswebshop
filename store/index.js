

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
        var id = product.id
        var data =  state.itemsInCart

        for(var i = 0; i < data.length; i++) {
            if(data[i].id == id) {
                data.splice(i, 1);
                break;
            }
        }
    },
 
    EMPTY_CART(state){
      while (state.itemsInCart.length) {
        state.itemsInCart.pop();
      }
    } 
}

