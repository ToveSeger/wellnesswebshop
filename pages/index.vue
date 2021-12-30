<template>
    <button @click="getProd(1)">Show</button>
</template>

<script>
export default {
  methods: {
    async getProd (id) {
      try {               
        const response = await this.$axios.get(`/api/product/${id}`)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }

    }
  }
}

//`/api/product/${id}`
///api/test
</script>

