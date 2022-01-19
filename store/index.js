export const state=()=>({
     itemsInCart: [{
        

     }],

     addedProductIds: [],


})

export const mutations={
    ADD_PRODUCT_TO_CART(state, product){
        var data = state.addedProductIds
        if(data.length > 0){

            console.log("product id" + product.id)
            var contains=data.includes(product.id)
            if(!contains){
                state.itemsInCart.push(product)
                state.addedProductIds.push(product.id)
                console.log(product) 
            }
        }
        else{
            console.log("first one in cart")
            state.itemsInCart.push(product)
            state.addedProductIds.push(product.id)
        }
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

