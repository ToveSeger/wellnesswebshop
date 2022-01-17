import cookies from "cookie-universal-nuxt"
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

  export const actions= {
    nuxtServerInit  ({ commit }, { req }){
            this.$cookies.get("cartItem")
            console.log(this.$cookies.get("cartItem"))
      }
    }
    