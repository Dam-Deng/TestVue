// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Hello from './components/Hello'
import VueRouter from 'vue-router'

const TodoList = resolve => require(['./components/TodoList.vue'], resolve)
Vue.use(VueRouter)

const NotFound = {template: '<p>Page not found</p>'}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Hello},
    {path: '/todo-list', component: TodoList},
    {path: '*', component: NotFound}
  ]
})

export default router
