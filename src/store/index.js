import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: []
  },
  mutations: {
    setCars (state, data) {
      state.cars = data
    },
    addCar (state, data) {
      state.cars.unshift(data)
    },
    deleteCar (state, index) {
      state.cars.splice(index, 1)
    }
  },
  actions: {
    loadCars ({ commit }) {
      axios.get('https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff07610\n' +
        '40ed1d95c59f14eaf26/frontend_test_table.json').then(response => {
        commit('setCars', response.data)
      })
    }
  },
  getters: {
    allCars (state) {
      return state.cars
    }
  }
})
