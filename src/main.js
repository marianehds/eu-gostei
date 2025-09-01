import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/home/HomePage.vue';
import RoupasPage from './views/roupas/RoupasPage.vue';
import ProductDetail from './views/product/ProductDetail.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/roupas', component: RoupasPage },
  { path: '/roupas/:id', component: ProductDetail },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
