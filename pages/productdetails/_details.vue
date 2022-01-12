<template>
    <div>
        {{product}}       
    </div>
</template>

<script>
    export default {    

          data() {
        return {
            product: [],       
        };
    },

    async fetch() {
        this.product = await fetch(`http://localhost:3000/api/product/${this.details}`).then(res => res.json());
    },

    asyncData ({ params }) {
    return {
      details: params.details
    }

  }
    }
</script>

<style lang="scss" scoped>

</style>