// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './Router'
import store from './store/index'
import _ from 'lodash'

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  created: function () {
    console.log(111)
  }

})

console.log(vm)

const add = (a, b, c) => {
  return {
    a,
    b,
    c
  }
}

const add10 = _.partial(add, _, _, 10)
console.log(add10(5))
