export const state=()=>({
     products: []
})

export const mutations={
    async GetProduct(state, query){
        let foundProducts =await this.$axios.$get(`http://localhost:3000/api/filterproducts/${query}`) 
        state.products.push(foundProducts)
    }
}

/* 
export const getters={

    async GetProduct(state, query){
        this.products = await this.$axios.$get(`http://localhost:3000/api/filterproducts/${query}`) 
        return products
    }
    GetProduct: async function(query){
        const products = await this.$axios.$get(`http://localhost:3000/api/filterproducts/${query}`) 
        return products
    } 
} */