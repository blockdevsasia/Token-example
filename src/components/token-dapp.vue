<template>
  <div class="hello">
      <button>Balance</button>
  </div>
</template>

<script>
export default {
  name: 'TokenDapp',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from token-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
  mounted () {
    this.$store.dispatch('getContractInstance')
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
