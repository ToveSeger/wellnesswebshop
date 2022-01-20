export const state=()=>({
    itemsInCart: [{
       

    }],

    addedProductIds: [{}],

    inCart: false 


})

export const mutations={
   ADD_PRODUCT_TO_CART(state, product){
       var data = state.addedProductIds
       var keepGoing = true
       var isAdded = false
       var amountObject = {
        id: product.id,
        amount: 1
        }
        
       if(data.length > 0){

            for(var i= 0; i<data.length && keepGoing;i++){
                if(data[i].id==product.id) {
                    isAdded = true
                    keepGoing = false
                }
            }

            console.log("evaluated to: " + isAdded)
                if (!isAdded){
                    state.itemsInCart.push(product)
                    state.addedProductIds.push(amountObject)
                    console.log("this product has ben added to cart among other products")
                }
       }
       else{
          
           console.log("first one in cart")
           state.itemsInCart.push(product)
           state.addedProductIds.push(amountObject)
           console.log("amountObject: " + amountObject.id + ", " + amountObject.amount)
       }

       state.inCart=true
       console.log("cartState:" + state.inCart)
   },

   ADD_PRODUCT_AMOUNT(amount){
        state.addedProductIds.push(amount)
        console.log(amount)
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
     while (state.addedProductIds.length) {
        state.addedProductIds.pop();
      }
   } 
}

export const actions={
    
    CHECK_IF_ADDED(state, productId){   
        console.log("registered id: " + productId)

        var data = state.addedProductIds

        if(data.length>0){
            for(var i = 0; i < data.length; i++) {
                if(data[i].id == productId) {
                    console.log("this item was already in cart")
                  inCart= true
                  
                }          
                else {
                    console.log("this item was not in cart")
                    inCart= false
                }
            }
        }
        else{
            console.log("cart length of zero")
            return
        }
    }
}

export const getters= {
    getAddedProductIds(state){
        return state.addedProductIds
    },

    getInCart(state){
        return state.inCart
    }
}