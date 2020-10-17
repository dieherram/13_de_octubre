import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    open: false, 
    sales: 0,
    products: [{
      id: '0001', 
      nombre: 'Agua sin gas', 
      stock: 30, 
      precio: 670
      }, 
      {
      id: '0002', 
      nombre: 'Leche extra proteína', 
      stock: 25, 
      precio:1190
      }, 
      {
      id: '0003', 
      nombre: 'Huevos Docena', 
      stock: 10, 
      precio: 1590
      }, 
      {
      id: '0004', 
      nombre: 'Pan marraqueta integral 1kg', 
      stock: 100,
      precio: 990
      }, 
      {
      id: '0005', 
      nombre: 'Avena multisemillas', 
      stock: 0, 
      precio: 1390
      }, ]
  },
  mutations: {
    TOGGLE_OPEN(state){
      state.open = !state.open
    },
    ADD_STOCK(state, product) {
      let prod = state.products.find(p => p.id == product.id)
      prod.stock += 1
    },
    REMOVE_STOCK(state, product){
      let prod = state.products.find(p => p.id == product.id)
      prod.stock -= 1
    }
  },
  actions: {
    toggleOpen({commit}){
      commit("TOGGLE_OPEN")
    },
    addStock({commit}, product){
      commit("ADD_STOCK", product)
    },
    removeStock({commit}, product){
      setTimeout(() => {
        commit('REMOVE_STOCK', product)
      }, 4000);
    }
  },
  getters:{
    availableProducts(state){
      return state.products.filter (product => product.stock > 0);
    },
    onSaleProducts(state){
      return state.products.filter (product => product.precio < 1000);
    }
  }
})
