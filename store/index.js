//Technical Documentation: 8.1
export const state=()=>({
    itemsInCart: [],
    addedProductIds: [],
    activeProductId: 0

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
                if (!isAdded){
                    state.itemsInCart.push(product)
                    state.addedProductIds.push(amountObject)
                }
       }
       else{
           state.itemsInCart.push(product)
           state.addedProductIds.push(amountObject)
       }
   },

   ADD_PRODUCT_AMOUNT(amount){
        state.addedProductIds.push(amount)
   }, 

   REMOVE_PRODUCT_FROM_CART(state, product){
       var id = product.id
       var data =  state.itemsInCart
       var amountData = state.addedProductIds

       for(var i = 0; i < data.length; i++) {
           if(data[i].id == id) {
               data.splice(i, 1);
               break;
           }
       }

       for(var i = 0; i < amountData.length; i++) {
        if(amountData[i].id == id) {
            amountData.splice(i, 1);
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
   }, 

   SET_ACTIVE_PRODUCT:(state, product)=>{
        state.activeProductId=product
   },

   SET_AMOUNT:(state, newValue)=>{      
       var product = state.addedProductIds.find((addedProductIds=>addedProductIds.id===state.activeProductId))
       product.amount=newValue
   },

}

export const actions={
    setAmount({commit, state}, newValue){
        commit("SET_AMOUNT", newValue)
        return state.addedProductIds
    }, 

    setActiveProduct({commit, state}, product){
        commit('SET_ACTIVE_PRODUCT', product)
        return state.activeProductId
    }

 

}


export const getters={
    getItemsInCart: state=>{
        return state.itemsInCart
    },

    getItemsInCartById: state=> id =>{
        return state.itemsInCart.find((itemsInCart=>itemsInCart.id===id))
    },

    getAddedProductIds: state=>{
        return state.addedProductIds
    },

    getLengthOfAddedProductIds: state=>{
        return state.addedProductIds.length
    },

    getProductById: state => id =>{
        return state.addedProductIds.find((addedProductIds=>addedProductIds.id===id))
    },

    getActiveProductId: state =>{
        return state.activeProductId
    },

    getProductAmountById:state=>id=>{
        return state.addedProductIds.find((addedProductIds=>addedProductIds.id===id)).amount
    },

    getCartSum:state=>{
          const sumArray = []
          var sum = 0
          var total = 0
          state.itemsInCart.forEach(item => {
             state.addedProductIds.forEach(product => {
                 if(item.id == product.id)
                var amountToAdd = item.price * product.amount
                if(amountToAdd!=undefined){
                    sumArray.push(amountToAdd)
                }
             });
          })

          sumArray.forEach(item => {
              sum+=parseFloat(item)
          });

            return parseFloat(sum).toFixed(2)
              
    },



    


}