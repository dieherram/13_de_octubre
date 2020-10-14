<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p v-text="globalOpen"></p>
    <p v-text="globalSales"></p>
    <ul>
      <li v-for="product in onSaleProducts" :key="product.id">
        {{product.nombre}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(["open", "sales"]),
    ...mapGetters(["availableProducts", "onSaleProducts"]),
    globalOpen(){
      let status = this.open
      ? "abierto": "cerrado"
      return `estado: ${status}`
    },
    globalSales (){
      return `el total de ventas es: ${this.sales}`
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
