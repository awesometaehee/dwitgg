import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductMng from '../views/ProductMng';
import OrderMng from '../views/OrderMng';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProductMng',
    component: ProductMng
  },
  {
    path: '/OrderMng',
    name: 'OrderMng',
    component: OrderMng
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
