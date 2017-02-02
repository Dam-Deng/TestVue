// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import TodoList from './components/TodoList'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const NotFound = {template: '<p>Page not found</p>'}

const router = new VueRouter({
  routes: [
    {path: '/', component: Hello},
    {path: '/todo-list', component: TodoList},
    {path: '*', component: NotFound}
  ]
})

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  created: function () {
    console.log(111)
  }

})

console.log(vm)
