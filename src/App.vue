<template>
  <div id="app">
    <token-dapp></token-dapp>
    <hr/>
    <hello-metamask></hello-metamask>
  </div>


</template>

<script>
import TokenDapp from './components/token-dapp'
import HelloMetamask from './components/hello-metamask'

export default {
  name: 'app',
  components: {
    HelloMetamask,
    TokenDapp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
